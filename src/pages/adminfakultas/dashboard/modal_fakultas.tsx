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

    UncontrolledTooltip,
    Badge,
    Media,
    Form,
    FormGroup,
    Input
} from "reactstrap";

import { withAdminAuth } from '~/src/utils/withAdminAuth';

import AdminLayout from '../../../layouts/AdminLayout';

import MDProposal from '~/src/components/Modals/MDProposal';
import MAProposal from '~/src/components/Modals/MAProposal';
import MRProposal from '~/src/components/Modals/MRProposal';


const DashboardModalPage: NextPage<{ userAgent: string }> = () => {

 
    const [showMDProposal, setShowMDProposal] = useState(false);
    const [showMAProposal, setShowMAProposal] = useState(false);
    const [showMRProposal, setShowMRProposal] = useState(false);


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
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Modals</h3>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Button
                                        color="info"
                                        onClick={() => setShowMDProposal(true)}
                                        size="lg"
                                    >
                                        Detail Proposal
                                    </Button>

                                    <Button
                                        color="info"
                                        onClick={() => setShowMAProposal(true)}
                                        size="lg"
                                    >
                                        ACC Proposal
                                    </Button>

                                    <Button
                                        color="info"
                                        onClick={() => setShowMRProposal(true)}
                                        size="lg"
                                    >
                                        Reject Proposal
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            <MDProposal
                isOpen={showMDProposal}
                toggle={() => setShowMDProposal(!showMDProposal)}
            />

            <MAProposal
                isOpen={showMAProposal}
                toggle={() => setShowMAProposal(!showMAProposal)}
            />

            <MRProposal
                isOpen={showMRProposal}
                toggle={() => setShowMRProposal(!showMRProposal)}
            />
        </div>

    );
}


export default DashboardModalPage;

