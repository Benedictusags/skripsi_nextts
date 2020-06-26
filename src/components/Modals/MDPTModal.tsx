import React from "react";
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

const MDPTModal = ({isOpen, toggle, data}) => {
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
                                <td scope="col">{data.acara}</td>
                            </tr>
                            <tr>
                                <td scope="col">Mulai</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.tanggal_mulai).toLocaleDateString() + ' ' + new Date(data.tanggal_mulai).toLocaleTimeString()}</td>
                            </tr>
                            <tr>
                                <td scope="col">Selesai</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.tanggal_selesai).toLocaleDateString() + ' ' + new Date(data.tanggal_selesai).toLocaleTimeString()}</td>
                            </tr>
                            <tr>
                                <td scope="col">Nama Tempat</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.nama_tempat}</td>
                            </tr>
                             <tr>
                                <td scope="col">Status</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.status}</td>
                            </tr>
                            <tr>
                                <td scope="col">Tanggal Status</td>
                                <td scope="col">:</td>
                                <td scope="col">{new Date(data.status_date).toLocaleDateString() + ' ' + new Date(data.status_date).toLocaleTimeString()}</td>
                            </tr>
                            <tr>
                                <td scope="col">Komen</td>
                                <td scope="col">:</td>
                                <td scope="col">{data.komen}</td>
                            </tr>
                        </tbody>
                </Table>
              </div>
              <div className="modal-footer">
                <Button color="link" type="button">
                  Print
                </Button>
                <Button
                  className="ml-auto"
                  color="primary"
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

export default MDPTModal;