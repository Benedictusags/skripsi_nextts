import React from 'react';
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

import AdminLayout from '../../../layouts/AdminLayout';
import Header from "../../../components/Headers/Header";

import { useRouter } from 'next/router';
import { withAdminAuth } from '~/src/utils/withAdminAuth';

const DashboardFormPage: NextPage<{ userAgent: string }> = () => {



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
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Archive Peminjaman Tempat</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div id="accordion">     
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                SENAT IKOM
                            </a>
                        </div>
                        <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Judul Acara</th>
                                        <th scope="col">Tangal Acara</th>
                                        <th scope="col">Tempat</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                        </Table>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                BEM IKOM
                            </a>
                        </div>
                        <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Judul Acara</th>
                                        <th scope="col">Tangal Acara</th>
                                        <th scope="col">Tempat</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                        </Table>
                    </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>

    </div>

  );
}


export default DashboardFormPage;

