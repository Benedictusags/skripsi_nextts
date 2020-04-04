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

import TTModal from '~/src/components/Modals/TTModal';
import MDTModal from '~/src/components/Modals/MDTModal';

const DashboardModalPage: NextPage<{ userAgent: string }> = () => {

 
    const [showTTModal, setShowTTModal] = useState(false);
    const [showMDTModal, setShowMDTModal] = useState(false);

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
                                        onClick={() => setShowTTModal(true)}
                                        size="lg"
                                    >
                                        Form Penambahan Tempat
                                    </Button>

                                    <Button
                                        color="info"
                                        onClick={() => setShowMDTModal(true)}
                                        size="lg"
                                    >
                                        Detai Permohonan Tempat
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            <TTModal
                isOpen={showTTModal}
                toggle={() => setShowTTModal(!showTTModal)}
                
            />    
            <MDTModal
                isOpen={showMDTModal}
                toggle={() => setShowMDTModal(!showMDTModal)}
            />
                
        </div>

    );
}


export default DashboardModalPage;

