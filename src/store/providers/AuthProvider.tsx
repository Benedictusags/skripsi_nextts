import React, { useState, useEffect } from 'react';

import { AuthContext } from '../context';

import { firebaseApp } from '~/src/utils/Firebase';

type Props = {
    children?: any
}

export default ({ children }: Props) => {

    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);

    function changeEmail(newEmail: string) {
        setEmail(newEmail);
    }

    function changeAuth(newAuth: boolean) {
        setAuth(newAuth);
    }

    function changeAdmin(newAdmin: boolean) {
        setAdmin(newAdmin);
    }

    useEffect(() => {
        const localEmail = window.localStorage.getItem('email');
        setEmail(localEmail);
        setAuth(true);

        
    }, []);

    // useEffect(() => {
    //     const unsubscribeAuthListener = firebaseApp.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             setAuth(true);
    //             setEmail(user.email);
    //             firebaseApp.firestore()
    //                 .collection('admins')
    //                 .doc(user.email)
    //                 .get()
    //                 .then((snap) => {
    //                     if (snap.exists) {
    //                         if (snap.data().admin) {
    //                             setAdmin(snap.data().admin);
    //                         }
    //                     }
    //                 })
    //                 .catch((e) => {
    //                     console.log(e);
    //                 })
    //             console.log("LOGGED IN")
    //         } else {
    //             setAuth(false);
    //             console.log("LOGGED OUT")
    //         }
    //     });
    //     return () => unsubscribeAuthListener();
    // }, []);

    return (
        <AuthContext.Provider value={{ changeEmail: changeEmail, changeAuth: changeAuth, changeAdmin: changeAdmin, loggedIn: auth, userEmail: email, admin: admin }} >
            {children}
        </AuthContext.Provider>
    );
}