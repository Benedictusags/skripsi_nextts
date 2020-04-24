import React from "react";

import Head from 'next/head';

import AdminNavbar from "../components/Navbars/AdminNavbar";
import AdminFooter from "../components/Footers/AdminFooter";
import Sidebar from "../components/Sidebar/SidebarUserProgdi";


const AdminLayout = ({ children }) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Paperie Lab</title>
        <meta name="description" content="Paperie Lab" />
        <meta name="keywords" content="" />

        <link rel="stylesheet" href="/vendor/nucleo/css/nucleo.css" />
        <link rel="stylesheet" href="/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="/css/argon-dashboard-react.css" />

        <link rel="stylesheet" href="/fonts/open_sans.css" ></link>
      </Head>
      <Sidebar />
      <div className="main-content">
        <AdminNavbar />
        {children}
        {/* <Container fluid>
          <AdminFooter />
        </Container> */}
      </div>
    </>
  );
}

export default AdminLayout;
