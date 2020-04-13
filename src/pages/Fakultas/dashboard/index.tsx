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
                <title>Fakultas</title>
            </Head>
            <>
            <i className="ni ni-spaceship" />
             Selamat Datang di Sisforma                                      
            </>
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