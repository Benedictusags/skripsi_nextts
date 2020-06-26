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

const FormModal = ({isOpen, toggle, id}) => {

  const [komenf, setKomenf] = useState('');

  function rejectData() {
    
    if(!komenf) {window.alert("Komentar wajib diisi"); return;}
    
    fetch('http://localhost:3001/feedbackProgdi', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({
          id: id, 
          aprf:  "Rejected",
          komenf: komenf,
          aprf_date: new Date(),
      }),
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      })
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
        window.alert("Berhasil Reject Proposal");
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
                    Penolakan Proposal
              </h6>
              <div className="form-group"> 
              <label htmlFor="inputAddress" className="form-control-label">Alasan Tidak Diestujui</label>
              <Input  
                className="form-control form-control-alternative" 
                id="nama_acara"
                placeholder="Karena...." 
                type="text"
                onChange={(e) => setKomenf(e.target.value)} 
              />
              </div>
              <br></br>
              </form>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right" onClick={rejectData} >Submit</button>
                <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
              </div>
            </Modal>
          
    );
}

export default FormModal;