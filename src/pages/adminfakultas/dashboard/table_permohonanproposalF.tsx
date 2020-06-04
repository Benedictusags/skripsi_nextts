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
import DPFakultas from '~/src/components/Modals/DPFakultas';

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';

const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const [showDPFakultas, setShowDPFakultas] = useState(false);
    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    const [daftar, setDaftar] = useState([{ judul_acara: '', tanggal_mulai: '', tanggal_selesai: '', tempat: '', anggaran: 0, file: '', user: '', aprf: '', komenf: ''}]);
    const [detailsData, setDetailsData] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/getProposal', {
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
                        judul_acara: value.judul_acara,
                        tanggal_mulai: value.tanggal_mulai,
                        tanggal_selesai: value.tanggal_selesai,
                        tempat: value.tempat,
                        anggaran: value.anggaran,
                        file: value.file,
                        user: value.user,
                        aprf: value.aprf,
                        komenf: value.komenf,
                    });
                });
                setDaftar(newDatas);
            })
            .catch((e) => {
                window.alert(e);
            });
    },[]);

    function openDetailsModal(data) {
        setShowDPFakultas(true);
        setDetailsData(data);
    }

const TableRow = ({ user, judul_acara, tanggal_mulai, tanggal_selesai, aprf, setShowDPFakultas }) => {

    return (
        <tr>
            <td>{user}</td>
            <td>{judul_acara}</td>
            <td>{tanggal_mulai} - {tanggal_selesai}</td>
            <td>{aprf}</td>
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
                            onClick={() => setShowDPFakultas(true)}
                        >
                            Details
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Delete
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Print
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
                                        <h3 className="mb-0">Daftar Pengajuan Proposal</h3>
                                    </div>
                                </Row>

                            </CardHeader>
                            <CardBody className="bg-secondary">
                                <Row className="align-items-center">
                                    <Col lg="3">
                                        <FormGroup>
                                            {/* <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Username
                                                </label> */}
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

                                </Row>
                            </CardBody>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nama Organisasi</th>
                                        <th scope="col">Judul Acara</th>
                                        <th scope="col">Tangal Acara</th>
                                        <th scope="col">Status Fakultas</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        daftar ?
                                            getItems(daftar, text, ['user'], currPage, sortPath, flag).map((data) => {
                                                return (
                                                    <TableRow 
                                                    user={data.user} 
                                                    judul_acara={data.judul_acara}
                                                    tanggal_mulai={data.tanggal_mulai}
                                                    tanggal_selesai={data.tanggal_selesai}
                                                    aprf={data.aprf} 
                                                    setShowDPFakultas={() => openDetailsModal(data)} />
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
                                            pageCount={filterItem(daftar, text, ['user']).length / 10}
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
            <DPFakultas
                isOpen={showDPFakultas}
                toggle={() => setShowDPFakultas(!showDPFakultas)}
                data={detailsData}
            />                              
        </div>

    );
}


export default DashboardTablePage;