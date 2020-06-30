import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

import AdminLayout from '../../../layouts/AdminLayout';
import Header from "../../../components/Headers/Header";

import { useRouter } from 'next/router';
import { withAdminAuth } from '~/src/utils/withAdminAuth';

const DashboardPage: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Admin Program Studi</title>
            </Head>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-white pl-3">
                                <i className="ni ni-spaceship mr-3" />
                                Selamat Datang di Sisforma  
                            </h1>  
                        </div>
                    </div>
                </div>
             </div>
        </>

    );
}

// DashboardPage.getInitialProps = async ctx => {

//     const user = await getCurrentUser();

//     console.log("USER", user)

//     if (user) {
//         return {
//             userAgent: user.email
//         };
//     }

//     return {
//         userAgent: 'ASDAS'
//     };
// }

export default DashboardPage;