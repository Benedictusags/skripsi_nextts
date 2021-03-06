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

const FPBModal = ({isOpen, toggle}) => {

  const {userEmail} = useContext(AuthContext);
  const [tanggalMulai, setTanggalMulai] = useState(new Date());
  const [tanggalSelesai, setTanggalSelesai] = useState(new Date());
  const [QTY, setQTY] = useState('');
  const [daftar, setDaftar] = useState([{ judul_acara: '', aprf: '', user: ''}]);
  const [namaacara, setNamaAcara] = useState('');
  const [barang, setBarang] = useState([{nama_barang: ''}]);
  const [namabarang, setNamaBarang] = useState('');

  function insertData() {
    
    if(!tanggalMulai) {window.alert("Tanggal mulai wajib diisi"); return;}
    if(!tanggalSelesai) {window.alert("Tanggal selesai wajib diisi"); return;}
    if(!QTY) {window.alert("Qty wajib diisi"); return;}
    
    fetch('http://localhost:3001/addPeminjamanBarang', {
      method: 'POST', // GET / POST DARI POSTMAN 
      body: JSON.stringify({ 
          user:  userEmail,
          acara: namaacara,
          tanggal_mulai: tanggalMulai,
          tanggal_selesai: tanggalSelesai,
          nama_barang: namabarang,
          QTY: QTY,
          status: "Pending",
          komen: "",
          submit_date: new Date(),
          status_date : new Date(),
      }),
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      })
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
      window.alert("Berhasil input peminjaman barang");
      toggle();
      })
      .catch((e) => {
        window.alert("Gagal input peminjaman barang");
      });
  }

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
              if (value.user === userEmail && value.aprf === 'Approved') {
                newDatas.push({
                    judul_acara: value.judul_acara,
                    aprf: value.aprf,
                    user: value.user,
                });
              }
            });
            setDaftar(newDatas);
        })
        .catch((e) => {
            window.alert(e);
        });
},[]);

useEffect(() => {
  fetch('http://localhost:3001/getBarang', {
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
                  nama_barang: value.nama_barang,
              });
          });
          setBarang(newDatas);
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
               <select 
                  id="namaacara" 
                  className="form-control form-control-alternative"
                  value={namaacara}
                  onChange={e => setNamaAcara(e.currentTarget.value)}
                >
                 <option selected>Pilih Acara yang sudah di Setujui</option>
                 {
                   daftar?
                   daftar.map((value,i)=> {
                     return <option key={i}  value={value.judul_acara}>{value.judul_acara}</option>
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
              </div>
              </div>
              <div className="form-row algin-center">
                 <div className="form-group col-md-6">
                 <label htmlFor="inputEmail4" className="form-control-label">Nama Barang</label>
                 <select
                 id="namatempat" 
                 className="form-control form-control-alternative"
                 value={namabarang}
                 onChange={e => setNamaBarang(e.currentTarget.value)}
              >
              <option selected>Pilih barang yang terdaftar</option>
                {
                   barang?
                   barang.map((value,a)=> {
                     return <option key={a}  value={value.nama_barang}>{value.nama_barang}</option>
                   }):null
                 }
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