import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
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

const FormModal = ({isOpen, toggle}) => {
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
              <form>
              <h6 className="heading-small text-muted mb-4">
                    Upload Lembar Pertanggungjawaban
              </h6>
              <div className="form-group"> 
              <label htmlFor="inputAddress" className="form-control-label">Pilih File LPJ</label>
              <Input  
                className="form-control form-control-alternative" 
                id="nama_acara"
                placeholder="Rp. XXXXX" 
                type="file" 
              />
              </div>
              <br></br>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" >Submit</button>
                <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
              </form>
              </div>
            </Modal>
          
    );
}

export default FormModal;