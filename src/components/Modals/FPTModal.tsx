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

const FPTModal = ({isOpen, toggle}) => {
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
                    Peminjaman Baru 
                    </h6>
              <div className="form-group"> 
              {/* Bagian Barang */}
              <label htmlFor="inputAddress" className="form-control-label">Nama Acara</label>
                <select id="inputState" className="form-control form-control-alternative">
              <option selected>Pilih Acara yang sudah di Setujui</option>
              <option>...</option>
              </select>
              <br></br>
              <label htmlFor="inputState" className="form-control-label">Nama Tempat</label>
                <select id="inputState" className="form-control form-control-alternative">
              <option selected>Choose...</option>
              <option>...</option>
              </select>
              </div>
              <div className="form-row algin-center">
                 <div className="form-group col-md-6">
                 <label htmlFor="inputEmail4" className="form-control-label">Waktu, Tanggal Mulai</label>
                            <div className="input-group input-group-alternative">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                  </div>
                                  <Input  
                                  className="flatpickr datetimepicker form-control form-control-sm" 
                                  id="tanggal_mulai"
                                  placeholder="Datetimepicker" 
                                  type="text" 
                                  />
                                </div>
                </div>
              <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" className="form-control-label">Waktu, Tanggal Selesai</label>
              <div className="input-group input-group-alternative">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                  </div>
                                  <Input  
                                  className="flatpickr datetimepicker form-control form-control-sm" 
                                  id="tanggal_mulai"
                                  placeholder="Datetimepicker" 
                                  type="text" 
                                  />
                                </div>
                                <br></br>
                               
              </div>
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

export default FPTModal;