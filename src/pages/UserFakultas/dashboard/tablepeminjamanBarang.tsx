import React, { useState } from 'react';
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

import FPBModal from '~/src/components/Modals/FPBModal';
import MDPBModal from '~/src/components/Modals/MDPBModal';


const TableRow = ({ name, setShowFPB, setShowMDPB }) => {

    return (
        <tr>
            <td>{name}</td>
            <td> 21/03/2020 - 23/03/2020
            </td>
            <td>Korsi</td>
            <td>50</td>
            <td>
            <Badge color="" className="badge-dot mr-4">
                    <i className="bg-green" />Approved
                </Badge>
            </td>
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
                            onClick={() => setShowMDPB(true)}
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


const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const SAMPLE = [
        {
            name: 'ikomers'
        },
        {
            name: 'Tawuran'
        },
        {
            name: 'Bambu Gila On the Road'
        },
    ];
    const [showFPB, setShowFPB] = useState(false);
    const [showMDPB, setShowMDPB] = useState(false);
    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    function setSortData(path) {
        setSortPath(path);
        setFlag(!flag);
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
                                            onClick={() => setShowFPB(true)}
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
                                        <th scope="col">Jenis Barang</th>
                                        <th scope="col">QTY</th>
                                        <th scope="col">Status</th>

                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        SAMPLE ?
                                            getItems(SAMPLE, text, ['name'], currPage, sortPath, flag).map((data) => {
                                                return (
                                                    <TableRow name={data.name} setShowFPB={setShowFPB} setShowMDPB={setShowMDPB} />
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
                                            pageCount={filterItem(SAMPLE, text, ['name']).length / 10}
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
            <FPBModal
                isOpen={showFPB}
                toggle={() => setShowFPB(!showFPB)}
            /> 

            <MDPBModal
                isOpen={showMDPB}
                toggle={() => setShowMDPB(!showMDPB)}
            /> 

                                          
        </div>

    );
}


export default DashboardTablePage;