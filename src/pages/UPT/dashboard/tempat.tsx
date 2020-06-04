import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import ReactPaginate from 'react-paginate';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Badge,
    Media,
    FormGroup,
    Input
} from "reactstrap";



import _ from 'lodash';

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';
import TTModal from '~/src/components/Modals/TTModal';

const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const [showTTModal, setShowTTModal] = useState(false);
    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    const [daftar, setDaftar] = useState([{nama_tempat: '', deskripsi: '', status: ''}]);

    useEffect(() => {
        fetch('http://localhost:3001/getTempat', {
            method: 'GET', // GET / POST DARI POSTMAN 
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })
            .then((res) => res.json())
            .then((data) => {
                const values = data.values;
                let newDatas = [];
                values.forEach(value => {
                    newDatas.push({
                        nama_tempat: value.nama_tempat,
                        deskripsi: value.deskripsi,
                        status: value.status,
                    });
                });
                setDaftar(newDatas);
            })
            .catch((e) => {
                window.alert(e);
            });
    },[]);

const TableRow = ({nama_tempat, deskripsi, status }) => {

    return (
        <tr>
            <td>{nama_tempat}</td>
            <td>{deskripsi}</td>
            <td>{status}</td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Edit
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Delete
                                                            </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}

    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* <Header /> */}
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
            {/* Page content */}
            <Container className="mt--7" fluid>

                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Daftar dan Ketersediaan Tempat</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            onClick={() => setShowTTModal(true)}
                                            size="sm"
                                        >
                                            + Tempat
                                                </Button>
                                    </div>
                                </Row>

                            </CardHeader>
                            <CardBody className="bg-secondary">
                                <Row>
                                    <Col lg="3">
                                            <FormGroup>
                                            <Input
                                                className="form-control-alternative form-control-sm"
                                                placeholder="Search"
                                                type="text"
                                                value={text}
                                                onChange={(e) => {
                                                    setText(e.target.value);
                                                    setCurrPage(0);
                                                }}
                                            />
                                            </FormGroup>
                                    </Col>
                                        <Col lg="3">
                                            <FormGroup>
                                        <div className="input-group input-group-alternative input-group-sm">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                            </div>
                                        <Input  
                                            className="flatpickr datetimepicker form-control form-control-sm" 
                                            id="tanggal_mulai"
                                            placeholder="Datetimepicker" 
                                            type="text" 
                                        />
                                        </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nama Tempat</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        daftar ?
                                            getItems(daftar, text, ['nama_tempat'], currPage, sortPath, flag).map((data) => {
                                                return (
                                                    <TableRow 
                                                    nama_tempat={data.nama_tempat}
                                                    deskripsi={data.deskripsi}
                                                    status={data.status} 
                                                    />
                                                );
                                            }) : null
                                    }
                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <nav className="justify-content-end mb-0 pagination" >
                                        <ReactPaginate
                                            onPageChange={({ selected }) => setCurrPage(selected)}

                                            breakLabel={'...'}
                                            breakClassName={'break-me'}
                                            pageCount={filterItem(daftar, text, ['nama_tempat']).length / 10}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={3}

                                            containerClassName={'pagination justify-content-end mb-0'}

                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}
                                            activeClassName={'active'}

                                            previousLabel={<i className="fas fa-angle-left" />}
                                            previousClassName={'page-item'}
                                            previousLinkClassName={'page-link'}

                                            nextLabel={<i className="fas fa-angle-right" />}
                                            nextClassName={'page-item'}
                                            nextLinkClassName={'page-link'}
                                            forcePage={currPage}
                                        />
                                    </nav>

                                </nav>

                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
            <TTModal
                isOpen={showTTModal}
                toggle={() => setShowTTModal(!showTTModal)}   
            />                              
        </div>

    );
}


export default DashboardTablePage;