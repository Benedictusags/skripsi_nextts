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
import DangerModal from '~/src/components/Modals/DangerModal';
import NormalModal from '~/src/components/Modals/NormalModal';
import FormModal from '~/src/components/Modals/FormModal';

const DashboardModalPage: NextPage<{ userAgent: string }> = () => {

    const [showDM, setShowDM] = useState(false);
    const [showM, setShowM] = useState(false);
    const [showFM, setShowFM] = useState(false);

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
                                        color="primary"
                                        onClick={() => setShowM(true)}
                                        size="lg"
                                    >
                                        Open Modal
                                    </Button>

                                    <Button
                                        color="info"
                                        onClick={() => setShowFM(true)}
                                        size="lg"
                                    >
                                        Open Form Modal
                                    </Button>

                                    <Button
                                        color="danger"
                                        onClick={() => setShowDM(true)}
                                        size="lg"
                                    >
                                        Open Danger Modal
                                    </Button>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            <DangerModal
                isOpen={showDM}
                toggle={() => setShowDM(!showDM)}
            />

            <NormalModal
                isOpen={showM}
                toggle={() => setShowM(!showM)}
            />

            <FormModal
                isOpen={showFM}
                toggle={() => setShowFM(!showFM)}
            />
        </div>

    );
}


export default DashboardModalPage;

