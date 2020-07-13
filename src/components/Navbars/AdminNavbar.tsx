import React, {useState, useContext, useEffect} from "react";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

import Router from 'next/router';
import { firebaseApp } from '~/src/utils/Firebase';
import { AuthContext } from '~/src/store/context';

const AdminNavbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() { setDropdownOpen(!dropdownOpen) }

  const {userEmail, changeEmail, changeAuth} = useContext(AuthContext);


  function signOut() {
    changeEmail('');
    changeAuth(false);
    window.localStorage.removeItem('email')
    Router.reload()                               
  }

  const [daftar, setDaftar] = useState([{ user: '', pass: '', nama_ketua: ''}]);
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
      fetch('http://localhost:3001/getUser', {
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
                  if (value.user === userEmail) {
                      newDatas.push({
                          id: value.id,
                          judul_acara: value.judul_acara,
                          user: value.user,
                          nama_ketua: value.nama_ketua,
                  });
              }
              });
              setDaftar(newDatas);
          })
          .catch((e) => {
              window.alert(e);
          });
  },[]);

 

  return (
    <>
      <Navbar className="navbar-top navbar-dark bg-gradient-info" expand="md" id="navbar-main">
        <Container fluid>
          <div className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">Dashboard</div>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    {/* <img
                        alt="..."
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />  */}
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold" style={{color: 'black'}}>{userEmail}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem 
                to="/admin/user-profile"
                onClick={e => e.preventDefault()}
                >
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                  
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
