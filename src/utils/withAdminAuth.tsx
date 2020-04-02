import React, { useState, useEffect, FunctionComponent, useContext } from 'react';
import { NextComponentType } from 'next';

import Router from 'next/router';

import { AuthContext } from '~/src/store/context';

import AdminLayout from '~/src/layouts/AdminLayout';
import UserLayout from '~/src/layouts/UserLayout';

export function withAdminAuth<T>(Component: FunctionComponent<T>): FunctionComponent {
    return (props: T) => (
        <HOC>
            <Component {...props} />
        </HOC>
    );
}

export const HOC: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('admin/dashboard')) {
            if (admin) {
                setIsLoading(false);
            } else {
                // firebaseApp.auth().signOut();
            }
        } else {
            // firebaseApp.auth().signOut();
        }
    }, [loggedIn, admin]);

    return (
        <>
            {
                isLoading ?
                    (<h1>Loading . . .</h1>) : (
                        <AdminLayout>
                            {children}
                        </AdminLayout>
                    )
            }
        </>
    );
}


export const HOCUser: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('user/dashboard')) {
            // if (admin) {
                setIsLoading(false);
            // } else {
                // firebaseApp.auth().signOut();
            // }
        // } else {
            // firebaseApp.auth().signOut();
        }
    }, [loggedIn, admin]);

    return (
        <>
            {
                isLoading ?
                    (<h1>Loading . . .</h1>) : (
                        <UserLayout>
                            {children}
                        </UserLayout>
                    )
            }
        </>
    );
}

export default HOC;