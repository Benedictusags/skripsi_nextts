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
    fetch('http://localhost:3001/feedbackFakultas', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({
          id: 3, 
          aprf:  "Approved",
          komenf: "",
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


import MRFakultas from '~/src/components/Modals/MRFakultas';


const MDUModal = ({isOpen, toggle, data}) => {

  const [showMRFakultas, setShowMRFakultas] = useState(false);


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
                                <td scope="col">Nama Acara</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.judul_acara}</td>
                            </tr>
                            <tr>
                                <td scope="col">Mulai</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.tanggal_mulai}</td>
                            </tr>
                            <tr>
                                <td scope="col">Selesai</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.tanggal_selesai}</td>
                            </tr>
                            <tr>
                                <td scope="col">Tempat</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.tempat}</td>
                            </tr>
                            <tr>
                                <td scope="col">Anggaran</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.anggaran}</td>
                            </tr>
                            <tr>
                                <td scope="col">Status Fakultas</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.aprf}</td>
                            </tr>
                            <tr>
                                <td scope="col">Status Pusat</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.aprp}</td>
                            </tr>
                            <tr>
                                <td scope="col">Anggaran yang disetujui/Komentar</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.komenp}</td>
                            </tr>
                            <tr>
                                <td scope="col">Dokumen Proposal</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.file}</td>
                            </tr>
                        </tbody>
                </Table>
              </div>
              <div className="modal-footer">
                <Button color="link" type="button">
                  Print
                </Button>
              <button type="submit" className="btn btn-primary btn-sm float-right" onClick={approveData} >Approve</button>
              <button type="submit" className="btn btn-danger btn-sm float-right" onClick={() => setShowMRFakultas(true)} >Reject</button>

              <MRFakultas
                isOpen={showMRFakultas}
                toggle={() => setShowMRFakultas(!showMRFakultas)}
              />
              </div>
            </Modal>
          
    );
}

export default MDUModal;