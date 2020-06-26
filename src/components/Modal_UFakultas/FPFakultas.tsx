import React, { useState, useContext } from "react";
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
import { AuthContext } from '~/src/store/context';
import CurrencyFormat from 'react-currency-format';


const FormModal = ({ isOpen, toggle }) => {

  const CurrencyFormat = require('react-currency-format');
  const {userEmail} = useContext(AuthContext);
  const [judulAcara, setJudulAcara] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState(new Date());
  const [tanggalSelesai, setTanggalSelesai] = useState(new Date());
  const [tempat, setTempat] = useState('');
  const [anggaran, setAnggaran] = useState('');
  const [file, setFile] = useState('');


  function insertData() {
    
    if(!judulAcara) {window.alert("Judul acara wajib diisi"); return;}
    if(!tempat) {window.alert("Tempat wajib diisi"); return;}
    if(!anggaran) {window.alert("Anggaran wajib diisi"); return;}
    if(!file) {window.alert("File wajib diisi"); return;}

    fetch('http://localhost:3001/addProposal', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({
        judul_acara: judulAcara,
        tanggal_mulai: tanggalMulai,
        tanggal_selesai: tanggalSelesai,
        dikampus: 1,
        tempat: tempat,
        anggaran: anggaran,
        file: file,
        user: userEmail,
        aprf: "Pending",
        aprp: "Pending",
        komenf: "",
        komenp: "",
        Lpj: "",
        submit_date: new Date(),
        aprf_date: new Date(),
        aprp_date: new Date(),
        lpj_date: "",
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.alert("Berhasil input proposal");
        toggle();
      })
      .catch((e) => {
        window.alert("Gagal input proposal");;
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
            Proposal Baru
                    </h6>
          <div className="form-group">
            <label htmlFor="inputAddress" className="form-control-label">Nama Acara</label>
            <Input
              className="form-control form-control-alternative"
              placeholder="Nama Acara"
              type="text"
              onChange={(e) => setJudulAcara(e.target.value)}
            />
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
            <label htmlFor="input_tempat" className="form-control-label">Tempat</label>
              <Input
                className="form-control form-control-alternative"
                placeholder="Tempat"
                type="text"
                onChange={(e) => setTempat(e.target.value)}
              />
            <br></br>
            <label htmlFor="input_anggaran" className="form-control-label">Anggaran</label>
              <CurrencyFormat
                className="form-control form-control-alternative"
                placeholder="Tempat"
                type="text"
                onChange={(e) => setAnggaran(e.target.value)}
                thousandSeparator={true} 
                prefix={'Rp. '}
              />
          <br></br>
          <label htmlFor="input_anggaran" className="form-control-label">Dokumen Proposal</label>
          <Input
            className="form-control form-control-alternative"
            id="input_anggaran"
            placeholder="Tempat"
            type="file"
            onChange={(e) => setFile(e.target.value)}
          />
          <br></br>
        </form>
        <button type="submit" className="btn btn-primary btn-sm float-right" onClick={insertData}>Submit</button>
        <button type="submit" className="btn btn-secondary btn-sm float-right" aria-hidden={true}>Cancel</button>
      </div>
    </Modal>

  );
}

export default FormModal;