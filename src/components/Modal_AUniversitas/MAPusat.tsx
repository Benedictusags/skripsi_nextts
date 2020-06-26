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

import CurrencyFormat from 'react-currency-format';

const FormModal = ({isOpen, toggle, id}) => {

  const CurrencyFormat = require('react-currency-format');
  const [komenp, setKomenp] = useState('');
    
  function approveData() {
    
    if(!komenp) {window.alert("Persetujuan anggaran wajib diisi"); return;}
    
    fetch('http://localhost:3001/feedbackPusat', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({
          id: id, 
          aprp:  "Approved",
          komenp: komenp,
          aprp_date: new Date(),
      }),
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      })
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
      window.alert("Berhasil Approve Proposal");
      toggle();
      })
      .catch((e) => {
      window.alert("Gagal Approve Proposal");
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
                    Persetujuan Proposal
              </h6>
              <div className="form-group"> 
              <label htmlFor="inputAddress" className="form-control-label">Anggaran Yang Disetujui</label>
              <CurrencyFormat  
                className="form-control form-control-alternative" 
                id="nama_acara"
                placeholder="Rp. XXXXX" 
                type="text" 
                onChange={(e) => setKomenp(e.target.value)}
                thousandSeparator={true} 
                prefix={'Rp. '}
              />
              </div>
              <br></br>
              </form>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" onClick={approveData} >Submit</button>
                <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
              </div>
            </Modal>
          
    );
}

export default FormModal;