import React, {useState, useEffect} from 'react';
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
import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';

import { useRouter } from 'next/router';
import { withAdminAuth } from '~/src/utils/withAdminAuth';
import DPProgdi from '~/src/components/Modal_AProgdi/DPProgdi';

const DashboardFormPage: NextPage<{ userAgent: string }> = () => {

  const [showDPProgdi, setShowDPProgdi] = useState(false);
  const [text, setText] = useState('');
  const [currPage, setCurrPage] = useState(0);

  const [sortPath, setSortPath] = useState('');
  const [flag, setFlag] = useState(true);

  const [daftar, setDaftar] = useState([{ judul_acara: '', tanggal_mulai: '', tanggal_selesai: '', tempat: '', anggaran: 0, file: '', user: '', aprf: '', komenf: '',Lpj: '' , submit_date: '', aprf_date: '', lpj_date: ''}]);
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
                  console.log(value)
                  if(value.aprf !== 'Pending'){
                  newDatas.push({
                      id: value.ID,
                      judul_acara: value.judul_acara,
                      tanggal_mulai: value.tanggal_mulai,
                      tanggal_selesai: value.tanggal_selesai,
                      tempat: value.tempat,
                      anggaran: value.anggaran,
                      file: value.file,
                      user: value.user,
                      aprf: value.aprf,
                      komenf: value.komenf,
                      Lpj: value.Lpj, 
                      submit_date: value.submit_date,
                      aprf_date: value.aprf_date,
                      lpj_date: value.lpj_date,
                  });
                  }
              });
              setDaftar(newDatas);
          })
          .catch((e) => {
              window.alert(e);
          });
  }, []);

  function openDetailsModal(data) {
      setShowDPProgdi(true);
      setDetailsData(data);
  }

  const TableRow = ({ judul_acara, tanggal_mulai, tanggal_selesai, komenf, Lpj, lpj_date, setShowDPProgdi }) => {

      return (
          <tr>
              <td>{judul_acara}</td>
              <td>{new Date(tanggal_mulai).toLocaleDateString() + ' ' + new Date(tanggal_mulai).toLocaleTimeString()} - 
              {new Date(tanggal_selesai).toLocaleDateString() + ' ' + new Date(tanggal_selesai).toLocaleTimeString()}</td>
              <td>{komenf}</td>
              <td>{Lpj}, {new Date(lpj_date).toLocaleDateString() + ' ' + new Date(lpj_date).toLocaleTimeString()}</td>
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
                              onClick={() => setShowDPProgdi(true)}
                          >
                              Details
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
        <title>Portal Ormawa</title>
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
                    <h3 className="mb-0">Archive Proposal + LPJ Organisasi</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
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
              <div id="accordion">         
                    <div className="card">
                        <div className="card-header">
                        </div>
                        <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Judul Acara</th>
                                        <th scope="col">Tangal Acara</th>
                                        <th scope="col">Anggaran yang disetujui</th>
                                        <th scope="col">LPJ</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        daftar ?
                                            getItems(daftar, text, ['judul_acara'], currPage, sortPath, flag).map((data) => {
                                                return (
                                                    <TableRow
                                                        judul_acara={data.judul_acara}
                                                        tanggal_mulai={data.tanggal_mulai}
                                                        tanggal_selesai={data.tanggal_selesai}
                                                        komenf={data.komenf}
                                                        Lpj={data.Lpj}
                                                        lpj_date={data.lpj_date}
                                                        setShowDPProgdi={() => openDetailsModal(data)} />
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
                    </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
      <DPProgdi
        isOpen={showDPProgdi}
        toggle={() => setShowDPProgdi(!showDPProgdi)}
        data={detailsData}
      />
    </div>

  );
}


export default DashboardFormPage;

