import React, { useState, useEffect, useContext } from 'react';
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


{/* BAGIAN USER*/}
import _ from 'lodash';

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';

import FTProgdi from '~/src/components/Modal_UProgdi/FTProgdi';
import MDPTModal from '~/src/components/Modals/MDPTModal';
import { AuthContext } from '~/src/store/context';

const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const {userEmail} = useContext(AuthContext);
    const [showFPT, setShowFPT] = useState(false);
    const [showMDPT, setShowMDPT] = useState(false);
    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    const [daftar, setDaftar] = useState([{ acara: '', tanggal_mulai: '', tanggal_selesai: '', nama_tempat: '', status: '', komen: '', submit_date: '', status_date: ''}]);
    const [detailsData, setDetailsData] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/getPeminjamanTempat', {
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
                    if (value.user === userEmail) {
                    newDatas.push({
                        acara: value.acara,
                        tanggal_mulai: value.tanggal_mulai,
                        tanggal_selesai: value.tanggal_selesai,
                        nama_tempat: value.nama_tempat,
                        status: value.status,
                        komen: value.komen,
                        submit_date: value.submit_date,
                        status_date: value.status_date,
                    });
                }
                });
                setDaftar(newDatas);
            })
            .catch((e) => {
                window.alert(e);
            });
    },[]);

    function openDetailsModal(data) {
        setShowMDPT(true);
        setDetailsData(data);
    }

    const TableRow = ({ acara, tanggal_mulai, tanggal_selesai,nama_tempat, status, submit_date, status_date, setShowFPT, setShowMDPT }) => {

        return (
            <tr>
                <td>{acara}</td>
                <td>{new Date(tanggal_mulai).toLocaleDateString() + ' ' + new Date(tanggal_mulai).toLocaleTimeString()} - 
                {new Date(tanggal_selesai).toLocaleDateString() + ' ' + new Date(tanggal_selesai).toLocaleTimeString()}</td>
                <td>{nama_tempat}</td>
                <td>{status}, {new Date(status_date).toLocaleDateString() + ' ' + new Date(status_date).toLocaleTimeString()}</td>
                <td>{new Date(submit_date).toLocaleDateString() + ' ' + new Date(submit_date).toLocaleTimeString()}</td>
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
                                onClick={() => setShowMDPT(true)}
                            >
                                Detail
                                                                </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Print
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
                <title>Sisforma - Peminjaman </title>
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
                                        <h3 className="mb-0">Peminjaman</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            onClick={() => setShowFPT(true)}
                                            size="sm"
                                        >
                                            + Peminjaman
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
                                </Row>
                            </CardBody>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Judul Acara</th>
                                        <th scope="col">Tangal Acara</th>
                                        <th scope="col">Nama Tempat</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Tanggal Pengajuan</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        daftar ?
                                            getItems(daftar, text, ['name'], currPage, sortPath, flag).map((data) => {
                                                return (
                                                    <TableRow 
                                                    acara={data.acara}
                                                    tanggal_mulai={data.tanggal_mulai}
                                                    tanggal_selesai={data.tanggal_selesai}
                                                    nama_tempat={data.nama_tempat}
                                                    status={data.status} 
                                                    submit_date={data.submit_date}
                                                    status_date={data.status_date}
                                                    setShowFPT={setShowFPT} 
                                                    setShowMDPT={() => openDetailsModal(data)} />
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
                                            pageCount={filterItem(daftar, text, ['name']).length / 10}
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
            <FTProgdi
                isOpen={showFPT}
                toggle={() => setShowFPT(!showFPT)}
            />

            <MDPTModal
                isOpen={showMDPT}
                toggle={() => setShowMDPT(!setShowMDPT)}
                data={detailsData}
            />                                      
        </div>

    );
}


export default DashboardTablePage;