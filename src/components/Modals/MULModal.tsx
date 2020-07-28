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
  const [file, setFile] = useState<FileList>();
  
  function updateData() {

    if(!file) {window.alert("File wajib diisi"); return;}
    console.log(file[0])

    let form = new FormData();
    form.append('id', data.id)
    form.append('Lpj', file[0])
    form.append('lpj_date', new Date().toString())

    fetch('http://localhost:3001/updateLPJ', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);    
        window.alert("Berhasil input proposal");
        toggle();
      })
      .catch((e) => {
        window.alert("Gagal input proposal");
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
                id="input_anggaran"
                placeholder="Nama file jangan berspasi co: proposal_1"
                type="file"
                onChange={(e) => setFile(e.target.files)}    
          />
              </div>
              <br></br>
              </form>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" onClick={updateData} >Submit</button>
                <button type="submit" className="btn btn-secondary btn-sm float-right" onClick={toggle}>Cancel</button>
              </div>
              </div>
            </Modal>
          
    );
}

export default FormModal;