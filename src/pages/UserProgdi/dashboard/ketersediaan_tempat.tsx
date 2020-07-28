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

import { SortableTableHead, filterItem, getItems } from '~/src/utils/TableHelper';
import TBModal from '~/src/components/Modals/TBModal';
import DatePicker from 'react-datepicker';

const DashboardTablePage: NextPage<{ userAgent: string }> = () => {

    const [showTBModal, setShowTBModal] = useState(false);
    const [text, setText] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const [sortPath, setSortPath] = useState('');
    const [flag, setFlag] = useState(true);

    const [tanggalMulai, setTanggalMulai] = useState(new Date());
    const [tanggalSelesai, setTanggalSelesai] = useState(new Date());


    const [cekdaftar, setcekDaftar] = useState([{ acara: '', tanggal_mulai: '', tanggal_selesai: '', nama_tempat: '', user: '', status: '', komen: '', submit_date: '', status_date: '' }]);

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

                    newDatas.push({
                        id: value.id,
                        acara: value.acara,
                        user: value.user,
                        tanggal_mulai: value.tanggal_mulai,
                        tanggal_selesai: value.tanggal_selesai,
                        nama_tempat: value.nama_tempat,
                        status: value.status,
                    });
                });
                setcekDaftar(newDatas);
            })
            .catch((e) => {
                window.alert(e);
            });
    }, []);

    function setSortData(path) {
        setSortPath(path);
        setFlag(!flag);
    }

    function checkAvailability(inDate, outDate) {
        let isAvailable = true;
        cekdaftar.forEach((dat) => {
            console.log(dat)
            const nIn = new Date(tanggalMulai).getTime() / 1000;
            const nOut = new Date(tanggalSelesai).getTime() / 1000;

            const newInDate = new Date(inDate).getTime() / 1000;
            const newOutDate = new Date(outDate).getTime() / 1000;
            console.log(nIn, nOut, newInDate, newOutDate);
            console.log('a')

            // if (
            //    !(
            //     (newInDate > nOut && newOutDate > nOut) ||
            //     (newInDate < nIn && newOutDate < nIn)
            //    )
            // ) {
            //     isAvailable = false
            // }

            if (!((newInDate >= nOut && newOutDate >= nOut) || (newInDate <= nIn && newOutDate <= nIn))) {
                console.log('b')
                isAvailable = false;
            }


        });
        return isAvailable;
    }

    const TableRow = ({ nama_tempat,  status, user, tanggal_mulai, tanggal_selesai, setShowTBModal }) => {

        return (
            <>
                {
                    !checkAvailability(tanggal_mulai, tanggal_selesai) && status === 'Approved' ? (
                        <tr>
                            <td>{nama_tempat}</td>
                            <td>{new Date(tanggal_mulai).toLocaleDateString() + ' ' + new Date(tanggal_mulai).toLocaleTimeString()} - 
                                {new Date(tanggal_selesai).toLocaleDateString() + ' ' + new Date(tanggal_selesai).toLocaleTimeString()}</td>
                            <td>{user}</td>
                        </tr>
                    ) : <> </>
                }
            </>
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
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Daftar Peminjam Tempat</h3>
                                        <p className="mb-0"> Jika kosong berarti tempat tersedia </p>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            onClick={() => setShowTBModal(true)}
                                            size="sm"
                                        >
                                            + Barang
                                                </Button>
                                    </div>
                                </Row>

                            </CardHeader>
                            <CardBody className="bg-secondary">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <div className="input-group input-group-alternative input-group-sm">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                                </div>
                                                <DatePicker
                                                    className="flatpickr datetimepicker form-control form-control-sm"
                                                    selected={tanggalMulai}
                                                    onChange={date => setTanggalMulai(date)}
                                                    timeInputLabel="Time:"
                                                    dateFormat="MM/dd/yyyy h:mm aa"
                                                    showTimeInput
                                                    isClearable
                                                />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <div className="input-group input-group-alternative input-group-sm">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                                </div>
                                                <DatePicker
                                                    className="flatpickr datetimepicker form-control form-control-sm"
                                                    selected={tanggalSelesai}
                                                    onChange={date => setTanggalSelesai(date)}
                                                    timeInputLabel="Time:"
                                                    dateFormat="MM/dd/yyyy h:mm aa"
                                                    showTimeInput
                                                    isClearable
                                                />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nama Tempat</th>
                                        <th scope="col">Tanggal Peminjaman</th>
                                        <th scope="col">Peminjam</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cekdaftar ?
                                            getItems(cekdaftar, text, ['tanggal_mulai', 'tanggal_selesai'], currPage, sortPath, flag).map((data) => {

                                                return (
                                                    <TableRow
                                                        nama_tempat={data.nama_tempat}
                                                        status={data.status}
                                                        tanggal_mulai={data.tanggal_mulai}
                                                        tanggal_selesai={data.tanggal_selesai}
                                                        user={data.user}
                                                        setShowTBModal={setShowTBModal} />
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
                                            pageCount={filterItem(cekdaftar, text, ['name']).length / 10}
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
            <TBModal
                isOpen={showTBModal}
                toggle={() => setShowTBModal(!showTBModal)}
            />
        </div>

    );
}




export default DashboardTablePage;



