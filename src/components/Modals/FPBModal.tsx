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

import DatePicker from 'react-datepicker';

const FPBModal = ({isOpen, toggle}) => {

  const [tanggalMulai, setTanggalMulai] = useState(new Date());
  const [tanggalSelesai, setTanggalSelesai] = useState(new Date());
  const [QTY, setQTY] = useState('');

  function insertData() {
    fetch('http://localhost:3001/addPeminjamanBarang', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({ 
          user:  "Senat",
          acara: "Perang Sarung",
          tanggal_mulai: tanggalMulai,
          tanggal_selesai: tanggalSelesai,
          nama_barang: "kursi",
          QTY: QTY,
          status: "pending",
          komen: "",
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
              </div>
              <div className="form-row algin-center">
                 <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4" className="form-control-label">Waktu, Tanggal Mulai</label>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                      </div>
                        <DatePicker  
                          className="flatpickr datetimepicker form-control form-control-sm"
                          selected={tanggalMulai}
                          onChange={date => setTanggalMulai(date)}
                          timeInputLabel="Time:"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          showTimeInput
                          isClearable
                        />
                      </div>
                </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4" className="form-control-label">Waktu, Tanggal Selesai</label>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                    </div>
                      <DatePicker  
                        className="flatpickr datetimepicker form-control form-control-sm"
                        selected={tanggalSelesai}
                        onChange={date => setTanggalSelesai(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                        isClearable
                      />
                  </div>
              </div>
              </div>
              <div className="form-row algin-center">
                 <div className="form-group col-md-6">
                 <label htmlFor="inputEmail4" className="form-control-label">Nama Barang</label>
                 <select id="inputState" className="form-control form-control-alternative">
                 <option selected>Pilih Barang</option>
                 <option>...</option>
                 </select>
                 </div>
              <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" className="form-control-label">Qty</label>
                <Input  
                  className="form-control form-control-alternative" 
                  placeholder="Jumlah barang" 
                  type="text"
                  onChange={(e) => setQTY(e.target.value)} 
                />                  
              <br></br>
              <button type="submit" className="btn btn-primary btn-sm float-right" >+</button>                 
              </div>
              </div>
              </form>
              <br></br>
              <button type="submit" className="btn btn-primary btn-sm float-right" onClick={insertData} >Submit</button>
              <button type="submit" className="btn btn-secondary btn-sm float-right" aria-hidden={true} >Cancel</button>
              </div>
            </Modal>
          
    );
}

export default FPBModal;