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



import _ from 'lodash';

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';
import FPFakultas from '~/src/components/Modal_UFakultas/FPFakultas';
import DPUFakultas from '~/src/components/Modal_UFakultas/DPUFakultas';
import MULModal from '~/src/components/Modals/MULModal';
import { AuthContext } from '~/src/store/context';

const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const {userEmail} = useContext(AuthContext);
    const [showFM, setShowFM] = useState(false);
    const [showMDU, setShowMDU] = useState(false);
    const [showMUL, setShowMUL] = useState(false);
    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    const [daftar, setDaftar] = useState([{ judul_acara: '', tanggal_mulai: '', tanggal_selesai: '', tempat: '', user: '', aprf: '', aprf_date: '', aprp: '', aprp_date: '', komenf: '', anggaran: '', file: '',submit_date: ''}]);
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
                    if (value.user === userEmail) {
                        newDatas.push({
                            judul_acara: value.judul_acara,
                            tanggal_mulai: value.tanggal_mulai,
                            tanggal_selesai: value.tanggal_selesai,
                            tempat: value.tempat,
                            aprf: value.aprf,
                            aprp: value.aprp,
                            user: value.user,
                            komenf: value.komenf,
                            anggaran: value.anggaran,
                            file: value.file,
                            submit_date: value.submit_date,
                            aprf_date: value.aprf_date,
                            aprp_date: value.aprp_date,
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
        setShowMDU(true);
        setDetailsData(data);
    }

const TableRow = ({ judul_acara, tanggal_mulai, tanggal_selesai, aprf, aprp, submit_date, aprf_date, aprp_date, setShowFM, setShowMDU, setShowMUL }) => {

    return (
        <tr>
            <td>{judul_acara}</td>
            <td>{new Date(tanggal_mulai).toLocaleDateString() + ' ' + new Date(tanggal_mulai).toLocaleTimeString()} - 
            {new Date(tanggal_selesai).toLocaleDateString()+ ' ' + new Date(tanggal_selesai).toLocaleTimeString()}</td>
            <td>{aprf},{new Date(aprf_date).toLocaleDateString()+ ' ' + new Date(aprf_date).toLocaleTimeString()}</td>
            <td>{aprp},{new Date(aprp_date).toLocaleDateString()+ ' ' + new Date(aprp_date).toLocaleTimeString()}</td>
            <td>{new Date(submit_date).toLocaleDateString()+ ' '+ new Date(submit_date).toLocaleTimeString()}</td>
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
                                onClick={() => setShowMDU(true)}
                            >
                                Detail
                                </DropdownItem>
                            {
                                aprp === 'Approved' ?
                                (
                                <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Print
                                </DropdownItem>
                                 ):null
                            }
                            {
                                aprp === 'Approved' ?
                                (
                                <DropdownItem
                                href="#pablo"
                                onClick={() => setShowMUL(true)}
                            >
                                Upload LPJ
                                </DropdownItem>
                                ):null
                            }
                            {
                                aprf !== 'Approved' || aprp !== 'Approved' ?
                                (
                                <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Delete
                                </DropdownItem>
                                ):null
                            }
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
                                        <h3 className="mb-0">Pengajuan Proposal</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            onClick={() => setShowFM(true)}
                                            size="sm"
                                        >
                                            + Proposal
                                                </Button>
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
                                        <th scope="col">Judul Acara</th>
                                        <th scope="col">Tangal Acara</th>
                                        <th scope="col">Status Fakultas</th>
                                        <th scope="col">Status Pusat</th>
                                        <th scope="col">Tanggal Pengajuan</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        daftar ?
                                            getItems(daftar, text, ['judul_acara', 'aprp'], currPage, sortPath, flag).map((data) => {
                                                return (
                                                    <TableRow 
                                                    judul_acara={data.judul_acara}
                                                    tanggal_mulai={data.tanggal_mulai}
                                                    tanggal_selesai={data.tanggal_selesai}
                                                    aprf={data.aprf}
                                                    aprp={data.aprp}
                                                    aprf_date={data.aprf_date}
                                                    aprp_date={data.aprp_date}
                                                    submit_date={data.submit_date} 
                                                    setShowFM={setShowFM} 
                                                    setShowMDU={() => openDetailsModal(data)} 
                                                    setShowMUL={setShowMUL} />
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
                                            pageCount={filterItem(daftar, text, ['judul_acara']).length / 10}
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

            <FPFakultas
                isOpen={showFM}
                toggle={() => setShowFM(!showFM)}
            />

            <DPUFakultas
                isOpen={showMDU}
                toggle={() => setShowMDU(!showMDU)}
                data={detailsData}
            />

            <MULModal
                isOpen={showMUL}
                toggle={() => setShowMUL(!showMUL)}
            />                                    
        </div>

    );
}


export default DashboardTablePage;