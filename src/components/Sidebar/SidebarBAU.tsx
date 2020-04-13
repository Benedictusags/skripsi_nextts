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


  var routes25 = [
    {
      path: "/dashboard",
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      layout: "/BAU"
    },
    {
      path: "/dashboard/table_peminjamanbarang",
      name: "Daftar Permohonan",
      icon: "fa fa-envelope-square text-red",
      layout: "/BAU"
    },
    {
      path: "/dashboard/barang",
      name: "Daftar Barang",
      icon: "fa fa-envelope-square text-red",
      layout: "/BAU"
    },
    {
      path: "/dashboard/archive_adminbarang",
      name: "Archive",
      icon: "fa fa-envelope-square text-red",
      layout: "/BAU"
    },
    {
      path: "/dashboard/modal_barang",
      name: "Modals",
      icon: "ni ni-bullet-list-67 text-blue",
      layout: "/BAU"
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
          <Nav navbar>{createLinks(routes25)}</Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
