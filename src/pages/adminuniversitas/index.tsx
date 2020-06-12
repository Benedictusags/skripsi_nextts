import React, { useState, useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'

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
    Row,
    Col
} from "reactstrap";

import { AnimatePresence, motion } from 'framer-motion';

import Link from 'next/link';
import Router from 'next/router';

import { firebaseApp } from '~/src/utils/Firebase';
import AuthLayout from '~/src/layouts/AuthLayout';
import { AuthContext } from '~/src/store/context';

const AdminLoginPage: NextPage<{ userAgent: string }> = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {changeEmail, changeAuth} = useContext(AuthContext);

    function signIn() {
        fetch('http://localhost:3001/login', {
          method: 'POST', // GET / POST DARI POSTMAN 
          body: JSON.stringify({ 
              user: email,
              pass: pass,
          }),
           headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
          })
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              if  (data.values.length){
                  changeEmail(email)
                  changeAuth(true);
                  Router.push('/adminuniversitas/dashboard')
              }
          })
          .catch((e) => {
              window.alert(e);
          });

  }

    function check() {
        console.log(firebaseApp.auth().currentUser.email)
    }


    return (
        <>
            <Head>
                <title>Sisforma</title>
            </Head>
            {/* <AuthLayout> */}
            {/* <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}

            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            Login
                        </div>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button" onClick={signIn}>
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>

            </Col>
            {/* </motion.div > */}
            {/* </AuthLayout> */}

        </>
    );
}


export default AdminLoginPage;