import React, { useRef } from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";

import {useImage} from 'react-image';
import ReactToPrint from 'react-to-print';

const MDUModal = ({isOpen, toggle, data}) => {

    const componentRef = useRef();
    
    return (
        <Modal
              className="modal-dialog-centered"
              isOpen={isOpen}
              toggle={toggle}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Type your modal title
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggle}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                
                <Table className="align-items-center table-flush">
                        <tbody>
                            <tr>
                                <td scope="col">Tanggal Pengajuan</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.submit_date).toLocaleDateString() + ' ' + new Date(data.submit_date).toLocaleTimeString()}</td>
                            </tr>
                            <tr>
                                <td scope="col">Nama Acara</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.judul_acara}</td>
                            </tr>
                            <tr>
                                <td scope="col">Mulai</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.tanggal_mulai).toLocaleDateString() + ' ' + new Date(data.tanggal_mulai).toLocaleTimeString()}</td>
                            </tr>
                            <tr>
                                <td scope="col">Selesai</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.tanggal_selesai).toLocaleDateString() + ' ' + new Date(data.tanggal_selesai).toLocaleTimeString() }</td>
                            </tr>
                            <tr>
                                <td scope="col">Tempat</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.tempat}</td>
                            </tr>
                            <tr>
                                <td scope="col">Pengajuan Anggaran</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.anggaran}</td>
                            </tr>
                            <tr>
                                <td scope="col">Status Progdi</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.aprf}</td>
                            </tr>
                            <tr>
                                <td scope="col">Tanggal Approval</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.aprf_date).toLocaleDateString() + ' ' + new Date(data.aprf_date).toLocaleTimeString()}</td>
                            </tr>
                            <tr>
                                <td scope="col">Anggaran yang disetujui/Komentar</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.komenf}</td>
                            </tr>
                            <tr>
                                <td scope="col">Dokumen Proposal</td>
                                <td scope="col">:</td>
                                <td scope="col"><a href={'http://localhost:3001' + data.file}>Download</a></td>
                            </tr>
                        </tbody>
                </Table>
                
                <main id="site" role="main" className="d-none">
                <div  ref={componentRef}>
          <p className="text-center">
            <img 
            width={210} 
            height={126} 
            src="/unika.png"
            />
            <strong />
          </p>
          <h4 className="text-center my-5">
            <strong>LEMBAR BUKTI PERSETUJUAN</strong>
          </h4>
          <p className="text-center">
            <strong />
          </p>
          <div className="align-center">
            <table border={0} cellSpacing={0} cellPadding={0} width={595}>
              <tbody>
                <tr>
                  <td width={38} valign="top">
                    <p className="text-center">
                      1.
                    </p>
                  </td>
                  <td width={161} valign="top">
                    <p>
                      Judul Kegiatan
                    </p>
                  </td>
                  <td width={397} valign="top">
                    <p>
                      : {data.judul_acara}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width={38} valign="top">
                    <p className="text-center">
                      2.
                    </p>
                  </td>
                  <td width={161} valign="top">
                    <p>
                      Waktu Pelaksanaan
                    </p>
                  </td>
                  <td width={397} valign="top">
                    <p>
                      : {new Date(data.tanggal_mulai).toLocaleDateString() + ' ' + new Date(data.tanggal_mulai).toLocaleTimeString()} - {new Date(data.tanggal_selesai).toLocaleDateString() + ' ' + new Date(data.tanggal_selesai).toLocaleTimeString() }
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width={38} valign="top">
                    <p className="text-center">
                      3.
                    </p>
                  </td>
                  <td width={161} valign="top">
                    <p>
                      Tempat Pelaksanaan
                    </p>
                  </td>
                  <td width={397} valign="top">
                    <p>
                      : {data.tempat}                     
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width={38} valign="top">
                    <p className="text-center">
                      4.
                    </p>
                  </td>
                  <td width={161} valign="top">
                    <p>
                      Jumlah Anggaran
                    </p>
                    <p>
                      Dana disetujui
                    </p>
                  </td>
                  <td width={397} valign="top">
                    <p>
                      : <strong>{data.anggaran}</strong>
                    </p>
                    <p>
                      : <strong>{data.komenf}</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width={38} valign="top">
                    <p className="text-center">
                      5.
                    </p>
                  </td>
                  <td width={161} valign="top">
                    <p>
                      Status Approval
                    </p>
                    <p>
                      Dibuat 
                    </p>
                    <p>
                      Approval Progdi
                    </p>
                    <p>
                      Pembuat
                    </p>
                  </td>
                  <td width={397} valign="top">
                    <br></br>
                    <p>

                    </p>
                    <p>
                      : {new Date(data.submit_date).toLocaleDateString() + ' ' + new Date(data.submit_date).toLocaleTimeString()}
                    </p>
                    <p>
                      : {data.aprf}, {new Date(data.aprf_date).toLocaleDateString() + ' ' + new Date(data.aprf_date).toLocaleTimeString()}
                    </p>
                    <p>
                      : {data.user}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </main>
        
              </div>
              <div className="modal-footer">
              <ReactToPrint trigger={() => <Button color="link" type="button"> Print </Button>} 
               content={() => componentRef.current} />
                <Button
                  className="danger"
                  color="danger"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggle}
                >
                  Close
                </Button>
              </div>
            </Modal>
          
    );
}

export default MDUModal;