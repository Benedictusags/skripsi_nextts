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

function insertData() {
  fetch('http://localhost:3001/addProposal', {
    method: 'POST', // GET / POST DARI POSTMAN 
    body: JSON.stringify({ 
        judul_acara:  "acaraan",
        tanggal_mulai: 1234,
        tanggal_selesai: 4321,
        dikampus: 1,
        tempat: "Unika",
        anggaran: 300000,
        file: "aaaaa",
        user: "hmpssi",
        aprf: "pending",
        aprp: "pending",
        komenf: "",
        komenp: "",
        Lpj: "",
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
                    Proposal Baru
                    </h6>
              <div className="form-group"> 
              <label htmlFor="inputAddress" className="form-control-label">Nama Acara</label>
              <Input  
                className="form-control form-control-alternative" 
                id="nama_acara"
                placeholder="Nama Acara" 
                type="text" 
              />
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
              </div>
              <label htmlFor="input_tempat" className="form-control-label">Tempat</label>
              <Input  
                className="form-control form-control-alternative" 
                id="tempat"
                placeholder="Tempat" 
                type="text" 
              />
              <br></br>
              <label htmlFor="input_anggaran" className="form-control-label">Anggaran</label>
              <Input  
                className="form-control form-control-alternative" 
                id="input_anggaran"
                placeholder="Tempat" 
                type="text" 
              />
              <br></br>
              <label htmlFor="input_anggaran" className="form-control-label">Dokumen Proposal</label>
              <Input  
                className="form-control form-control-alternative" 
                id="input_anggaran"
                placeholder="Tempat" 
                type="file" 
              />
              <br></br>
              <button type="submit" className="btn btn-primary btn-sm float-right"  onClick={insertData}  >Submit</button>
              <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </form>
              </div>
            </Modal>
          
    );
}

export default FormModal;