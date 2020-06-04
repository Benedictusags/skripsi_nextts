import React, { useState, useEffect, useContext } from "react";
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

const FPTModal = ({isOpen, toggle}) => {
  
  const {userEmail} = useContext(AuthContext);
  const [tanggalMulai, setTanggalMulai] = useState(new Date());
  const [tanggalSelesai, setTanggalSelesai] = useState(new Date());
  const [daftar, setDaftar] = useState([{ judul_acara: '', aprf: ''}]);
  const [tempat, setTempat] = useState([{nama_tempat: ''}]);
  const [namaacara, setNamaAcara] = useState('');
  const [namatempat, setNamaTempat] = useState('');

  function insertData() {
    fetch('http://localhost:3001/addPeminjamanTempat', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({ 
          user:  userEmail,
          acara: namaacara,
          tanggal_mulai: tanggalMulai,
          tanggal_selesai: tanggalSelesai,
          nama_tempat: namatempat,
          status: "Pending",
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

  useEffect(() => {
    fetch('http://localhost:3001/getTempat', {
        method: 'GET', // GET / POST DARI POSTMAN 
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        })
        .then((res) => res.json())
        .then((data) => {
            const values = data.values;
            let newDatas = [];
            values.forEach(value => {
                newDatas.push({
                    nama_tempat: value.nama_tempat,
                });
            });
            setTempat(newDatas);
        })
        .catch((e) => {
            window.alert(e);
        });
},[]);

  useEffect(() => {
    fetch('http://localhost:3001/getProposal', {
        method: 'GET', // GET / POST DARI POSTMAN 
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        })
        .then((res) => res.json())
        .then((data) => {
            const values = data.values;
            let newDatas = [];
            values.forEach(value => {
                newDatas.push({
                    judul_acara: value.judul_acara,
                    aprf: value.aprf,
                });
            });
            setDaftar(newDatas);
        })
        .catch((e) => {
            window.alert(e);
        });
},[]);

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
                <select id="namaacara" className="form-control form-control-alternative">
                 <option selected>Pilih Acara yang sudah di Setujui</option>
                 {
                   daftar?
                   daftar.map((value,i)=> {
                     if (value.aprf !== 'Approved') {
                       return null;
                     }
                     return <option key={i}  onClick={() => {setNamaAcara(value.judul_acara)}}>{value.judul_acara}</option>
                   }):null
                 }
                </select>
              <br></br>
              <label htmlFor="inputState" className="form-control-label">Nama Tempat</label>
                <select id="namatempat" className="form-control form-control-alternative">
              <option selected>Pilih tempat yang terdaftar</option>
              {
                   tempat?
                   tempat.map((value,a)=> {
                     return <option key={a}  onClick={() => {setNamaTempat(value.nama_tempat)}}>{value.nama_tempat}</option>
                   }):null
                 }
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
                                <br></br>                            
              </div>
              </div>
              <br></br>
              </form>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-sm float-right"  onClick={insertData} >Submit</button>
                <button type="submit" className="btn btn-secondary btn-sm float-right" >Cancel</button>
              </div>
              </div>
            </Modal>
          
    );
}

export default FPTModal;