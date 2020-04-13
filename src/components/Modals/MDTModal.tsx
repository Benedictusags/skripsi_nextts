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

const MDTModal = ({isOpen, toggle}) => {
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
                                <td scope="col">Tempat</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                            <tr>
                                <td scope="col">Mulai - Selesai</td>
                                <td scope="col">:</td>
                                <td scope="col">Loren Ipsum Dolor Jancok</td>
                            </tr>
                        </tbody>
                </Table>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" >Approve</button>
                <button type="submit" className="btn btn-danger btn-sm float-right" >Reject</button>
              </div>
            </Modal>
          
    );
}

export default MDTModal;