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


import MRPusat from '~/src/components/Modal_AUniversitas/MRPusat';
import MAPusat from '~/src/components/Modal_AUniversitas/MAPusat'; 


const MDUModal = ({isOpen, toggle, data}) => {

  const [showMRPusat, setShowMRPusat] = useState(false);
  const [showMAPusat, setShowMAPusat] = useState(false);

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
                                <td scope="col">Status Universitas</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.aprp}</td>
                            </tr>
                            <tr>
                                <td scope="col">Tanggal Approval</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.aprp_date).toLocaleDateString() + ' ' + new Date(data.aprp_date).toLocaleTimeString()}</td>
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
              <div className="modal-footer">
                <Button color="link" type="button">
                  Print
                </Button>
                {
                  data.aprp === 'Pending' ?
                  (<> 
                  <button type="submit" className="btn btn-primary btn-sm float-right" onClick={() => setShowMAPusat(true)} >Approve</button> 
                  <button type="submit" className="btn btn-danger btn-sm float-right" onClick={() => setShowMRPusat(true)} >Reject</button> 
                  </>) : null
                }

              <MRPusat
                isOpen={showMRPusat}
                toggle={() => setShowMRPusat(!showMRPusat)}
                id={data.id}
              />

              <MAPusat
                isOpen={showMAPusat}
                toggle={() => setShowMAPusat(!showMAPusat)}
                id={data.id}
              />
              </div>
            </Modal>
          
    );
}

export default MDUModal;