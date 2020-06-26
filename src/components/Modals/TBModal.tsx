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

const TBModal = ({isOpen, toggle}) => {

const [NamaBarang, setNamaBarang] = useState('');
const [QTY, setQTY] = useState('');
const [status, setStatus] = useState('');

function insertData() {
  fetch('http://localhost:3001/addBarang', {
    method: 'POST', // GET / POST DARI POSTMAN 
    body: JSON.stringify({ 
        nama_barang:NamaBarang,
        QTY:QTY,
        status: status,
    }),
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        window.alert("Berhasil input barang");
        toggle();
    })
    .catch((e) => {
        window.alert("Gagal input barang");
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
                    Penambahan Barang 
                    </h6>
              <div className="form-group">
              <label className="form-control-label"> Nama Barang</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Nama Barang" 
                  type="text" 
                  onChange={(e) => setNamaBarang(e.target.value)}
              />
              </div>
              <div className="form-group">
              <label className="form-control-label">QTY</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="QTY" 
                  type="text"
                  onChange={(e) => setQTY(e.target.value)} 
              />
              <br></br>
              <div className="form-group">
              <label className="form-control-label">Status</label>
              <Input  
                  className="form-control form-control-sm form-control-alternative" 
                  id="tanggal_mulai"
                  placeholder="Status" 
                  type="text"
                  onChange={(e) => setStatus(e.target.value)} 
              />
              </div>
              </div>
              <br></br>
              </form>
              <button type="submit" className="btn btn-primary btn-sm float-right" onClick={insertData} >Submit</button>
              <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
            </Modal>
          
    );
}

export default TBModal;