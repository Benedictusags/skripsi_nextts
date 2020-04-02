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



import _ from 'lodash';

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';

const TableRow = ({ name }) => {

    return (
        <tr>
            <td>{name}</td>
            <td> 21/03/2020 - 23/03/2020
            </td>
            <td>
            <Badge color="" className="badge-dot mr-4">
                    <i className="bg-green" />Approved
                </Badge>
            </td>
            <td>
            <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />pending
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
                            onClick={e => e.preventDefault()}
                        >
                            Action
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Another action
                                                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Something else here
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
            name: 'DIES NATALIES'
        },
        {
            name: 'ASAL MUTER'
        },
    ];

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
                                        <h3 className="mb-0">Ketersediaan</h3>
                                    </div>
                                </Row>

                            </CardHeader>
                            <CardBody className="bg-secondary">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                        <select id="inputState" className="form-control form-control-sm form-control-alternative">
                                            <option selected>Pilih Jenis Ketersediaan</option>
                                            <option>Tempat</option>
                                            <option>Barang</option> 
                                            </select>
                                            <br></br>
                                        </FormGroup>
                                    </Col>
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
                        </Card>
                    </div>
                </Row>
            </Container>

        </div>

    );
}


export default DashboardTablePage;