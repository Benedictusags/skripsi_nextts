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
  fetch('http://localhost:3001/addTempat', {
    method: 'POST', // GET / POST DARI POSTMAN 
    body: JSON.stringify({ 
        nama_tempat:"Lapangan Albertus",
        deskripsi:"Lapangan futsal dan serbaguna",
        status: "Tersedia",
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

const TTModal = ({isOpen, toggle}) => {
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
                    Penambahan Tempat 
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
                <label className="form-control-label">Status</label>
                <select id="inputState" className="form-control form-control-alternative">
                  <option selected>Status</option>
                  <option>Tersedia</option>
                </select>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary btn-sm float-right"  onClick={insertData} >Submit</button>
              <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </form>
              </div>
            </Modal>
          
    );
}

export default TTModal;