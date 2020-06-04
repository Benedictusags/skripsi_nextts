import { NextPage } from 'next';
import React, { useState } from 'react';
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

function approveData() {
  fetch('http://localhost:3001/feedbackPeminjamanBarang', {
    method: 'POST', // GET / POST DARI POSTMAN 
    body: JSON.stringify({
        id: 2, 
        status:  "Approved",
        komen: "",
    }),
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        window.alert(e);
    });
}

import MRBau from '~/src/components/Modals/MRBau';

const MDBModal = ({isOpen, toggle, data}) => {

  const [showMRBau, setShowMRBau] = useState(false);
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
                                <td scope="col">Nama Organisasi</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.user}</td>
                            </tr>
                            <tr>
                                <td scope="col">Nama Acara</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.acara}</td>
                            </tr>
                            <tr>
                                <td scope="col">Tanggal Mulai</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.tanggal_mulai}</td>
                            </tr>
                            <tr>
                                <td scope="col">Tanggal Selesai</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.tanggal_selesai}</td>
                            </tr>
                            <tr>
                                <td scope="col">Nama Barang </td>
                                <td scope="col">:</td>
                                <td scope="col">{data.nama_barang}</td>
                                <td scope="col">{data.QTY}</td>
                            </tr>
                            <tr>
                                <td scope="col">Status</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.status}</td>
                            </tr>
                            <tr>
                                <td scope="col">Komentar</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.komen}</td>
                            </tr>
                        </tbody>
                </Table>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" onClick={approveData}>Approve</button>
                <button type="submit" className="btn btn-danger btn-sm float-right" onClick={() => setShowMRBau(true)} >Reject</button>

              <MRBau
                isOpen={showMRBau}
                toggle={() => setShowMRBau(!showMRBau)}
              />
              </div>
            </Modal>
          
    );
}

export default MDBModal;