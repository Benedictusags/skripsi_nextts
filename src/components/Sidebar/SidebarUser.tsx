import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

import Link from 'next/link';
import { useRouter } from 'next/router';

var routes = [
    {
      path: "/dashboard",
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      layout: "/user"
    },
    {
      path: "/dashboard/table",
      name: "Proposal",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/tableketersediaan",
      name: "Cek Ketersediaan",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/tablepeminjaman",
      name: "Peminjaman",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/archiveuser",
      name: "Archive",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/modal",
      name: "Modal",
      icon: "ni ni-bullet-list-67 text-blue",
      layout: "/user"
    },
  ];

  var routes2 = [
    {
      path: "/dashboard",
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      layout: "/user"
    },
    {
      path: "/dashboard/table_peminjamantempat",
      name: "Daftar Permohonan",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/tempat",
      name: "Daftar Tempat",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/archive_admintempat",
      name: "Archive",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/modal_tempat",
      name: "Modals",
      icon: "ni ni-bullet-list-67 text-blue",
      layout: "/user"
    },

  ];

  var routes25 = [
    {
      path: "/dashboard",
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      layout: "/user"
    },
    {
      path: "/dashboard/table_peminjamanbarang",
      name: "Daftar Permohonan",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/barang",
      name: "Daftar Barang",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/archive_admintempat",
      name: "Archive",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/modal_barang",
      name: "Modals",
      icon: "ni ni-bullet-list-67 text-blue",
      layout: "/user"
    },

  ];

  var routes3 = [
    {
      path: "/dashboard",
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      layout: "/user"
    },
    {
      path: "/dashboard/table_permohonanproposal",
      name: "Daftar Permohonan",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/archive_adminpusat",
      name: "Archive",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },

  ];

  var routes35 = [
    {
      path: "/dashboard",
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      layout: "/user"
    },
    {
      path: "/dashboard/table_permohonanproposalFP",
      name: "Daftar Permohonan",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },
    {
      path: "/dashboard/archive_adminprogdi",
      name: "Archive",
      icon: "fa fa-envelope-square text-red",
      layout: "/user"
    },

  ];

const Sidebar = () => {

  const [collapse, setCollapse] = useState(false);

  function toggleCollapse() { setCollapse(!collapse); }
  function closeCollapse() { setCollapse(false); }

  const router = useRouter();

  // creates the links that appear in the left menu / Sidebar
  function createLinks(routes) {
    const output = [];
    routes.map((prop, key) => {
      output.push(
        <Link href={prop.layout + prop.path} key={key} >
          <NavItem style={{ cursor: 'pointer' }}>
            <NavLink
              to={prop.layout + prop.path}
              onClick={closeCollapse}
              active={router.pathname === (prop.layout + prop.path)}
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        </Link>

      );
    });
    return output;
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {/* {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            />
          </NavbarBrand>
        ) : null} */}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  {/* <img
                    alt="..."
                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                  /> */}
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile">
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile">
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile">
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile">
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapse}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {/* {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                </Col>
              ) : null} */}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Navigation */}
          <h6 className="navbar-heading text-muted">Organisasi / User</h6>
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Admin Peminjaman Tempat</h6>
          <Nav navbar>{createLinks(routes2)}</Nav>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Admin Peminjaman Barang</h6>
          <Nav navbar>{createLinks(routes25)}</Nav>
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Admin Persetujuan Proposal Pusat</h6>
          <Nav navbar>{createLinks(routes3)}</Nav>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Admin Persetujuan Proposal Fak/Progdi</h6>
          <Nav navbar>{createLinks(routes35)}</Nav>
          {/* Navigation */}
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
