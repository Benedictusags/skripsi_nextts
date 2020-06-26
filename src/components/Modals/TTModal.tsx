import React, { useState } from "react";
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

const TTModal = ({isOpen, toggle}) => {

  const [NamaTempat, setNamaTempat] = useState ('');
  const [Deskripsi, setDeskripsi] = useState ('');
  const [Status, setStatus] = useState ('');

  function insertData() {
    fetch('http://localhost:3001/addTempat', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({ 
          nama_tempat:NamaTempat,
          deskripsi:Deskripsi,
          status: Status,
      }),
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          window.alert("Berhasil input tempat");
          toggle();
      })
      .catch((e) => {
          window.alert("Gagal input tempat");
          toggle();
      });
  }

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
                  onChange={(e) => setNamaTempat(e.target.value)}
              />
              </div>
              <div className="form-group">
              <label className="form-control-label">Deskripsi</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Deskripsi" 
                  type="text" 
                  onChange={(e) => setDeskripsi(e.target.value)}
              />
              </div>
              <div className="form-group">
              <label className="form-control-label">Status</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Nama Tempat" 
                  type="text" 
                  onChange={(e) => setStatus(e.target.value)}
              />
              </div>
              <br></br>
              </form>
              <button type="submit" className="btn btn-primary btn-sm float-right"  onClick={insertData} >Submit</button>
              <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
            </Modal>
          
    );
}

export default TTModal;