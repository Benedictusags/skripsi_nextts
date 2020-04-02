import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {

    return (
        <>
            <Head>
                <title>My page title</title>

            </Head>
            <>
                <h1>TEST : {userAgent}</h1>
                <Link href="/user"><a>USER</a></Link><br />
                <Link href="/data/[id]" as={`/data/${'ABC'}`}><a>DATA ID</a></Link><br />
            </>
        </>
    );
}

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;