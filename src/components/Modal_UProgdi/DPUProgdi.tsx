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
                <div  ref={componentRef}>
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
                                <td scope="col">{data.file}</td>
                            </tr>
                        </tbody>
                </Table>
                </div>
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