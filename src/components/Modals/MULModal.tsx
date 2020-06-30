import React, {useState} from "react";
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



const FormModal = ({isOpen, toggle, data}) => {

  const [lpj, setLpj] = useState('');
  
  function updateData() {

    if(!lpj) {window.alert("Dokumen LPJ kosong"); return;}

    fetch('http://localhost:3001/updateLPJ', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({
          id: data.id, 
          Lpj: lpj,
          lpj_date: new Date(),
      }),
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          window.alert("Berhasil upload LPJ");
          toggle();
      })
      .catch((e) => {
          window.alert("Gagal upload LPJ");
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
                    Upload Lembar Pertanggungjawaban
              </h6>
              <div className="form-group"> 
              <label htmlFor="inputAddress" className="form-control-label">Pilih File LPJ</label>
              <Input  
                className="form-control form-control-alternative" 
                id="nama_acara"
                placeholder="Upload LPJ"
                type="file"
                onChange={(e) => setLpj(e.target.value)} 
              />
              </div>
              <br></br>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" onClick={updateData} >Submit</button>
                <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
              </form>
              </div>
            </Modal>
          
    );
}

export default FormModal;