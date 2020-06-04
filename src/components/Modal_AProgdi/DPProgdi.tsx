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

import MAProgdi from '~/src/components/Modal_AProgdi/MAProgdi';
import MRProgdi from '~/src/components/Modal_AProgdi/MRProgdi';


const MDUModal = ({isOpen, toggle, data}) => {

  const [showMAProgdi, setShowMAProgdi] = useState(false);
  const [showMRProgdi, setShowMRProgdi] = useState(false);


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
                                <td scope="col">Status Fak/Progdi</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.aprf}</td>
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

                 data.aprf === 'Pending' ?

              (<> 
              <button type="submit" className="btn btn-primary btn-sm float-right" onClick={() => setShowMAProgdi(true)} >Approve</button> 
              <button type="submit" className="btn btn-danger btn-sm float-right" onClick={() => setShowMRProgdi(true)} >Reject</button> 
              </>) : null
              
              }
              
              <MAProgdi
                isOpen={showMAProgdi}
                toggle={() => setShowMAProgdi(!showMAProgdi)}
                id={data.id}
              />

              <MRProgdi
                isOpen={showMRProgdi}
                toggle={() => setShowMRProgdi(!showMRProgdi)}
                id={data.id}
              />
              </div>
            </Modal>
          
    );
}

export default MDUModal;