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

const MDUModal = ({isOpen, toggle}) => {
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
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Mulai - Selesai</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Tempat</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Anggaran</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Status Fak/Progdi</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Status Pusat</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Anggaran yang disetujui/Komentar</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Dokumen Proposal</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
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

export default MDUModal;