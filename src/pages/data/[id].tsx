import React, { useState } from 'react';
import { NextPage } from 'next';


import Router, { useRouter } from 'next/router';

const DataPage: NextPage = () => {

    const router = useRouter();

    return (
        <>
            <h1>ID: {router.query.id}</h1>
        </>
    );
}

export default DataPage;