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

const TBModal = ({isOpen, toggle}) => {
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
                    Penambahan Barang 
                    </h6>
              <div className="form-group">
              <label className="form-control-label"> Nama Tempat</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Nama Tempat" 
                  type="text" 
              />
              </div>
              <div className="form-group">
              <label className="form-control-label">Deskripsi</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Nama Tempat" 
                  type="text" 
              />
              </div>
              <div className="form-group">
              <label className="form-control-label">QTY</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Nama Tempat" 
                  type="text" 
              />
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary btn-sm float-right" >Submit</button>
              <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </form>
              </div>
            </Modal>
          
    );
}

export default TBModal;