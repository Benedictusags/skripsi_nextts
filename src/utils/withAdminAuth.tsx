import React, { useState, useEffect, FunctionComponent, useContext } from 'react';
import { NextComponentType } from 'next';

import Router from 'next/router';

import { AuthContext } from '~/src/store/context';

import AdminLayout from '~/src/layouts/AdminLayout';
import UserFakultasLayout from '~/src/layouts/UserFakultasLayout';
import UPTLayout from '~/src/layouts/UPTLayout';
import BAULayout from '~/src/layouts/BAULayout';
import PROGDILayout from '~/src/layouts/PROGDILayout';
import PusatLayout from '~/src/layouts/PusatLayout';
import FakultasLayout from '~/src/layouts/FakultasLayout';
import UserProgdiLayout from '~/src/layouts/UserProgdiLayout';
import UserUniversitasLayout from '~/src/layouts/UserUniversitasLayout';

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


export const HOCUserFakultas: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('UserFakultas/dashboard')) {
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
                        <UserFakultasLayout>
                            {children}
                        </UserFakultasLayout>
                    )
            }
        </>
    );
}

export const HOCUserProgdi: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('UserProgdi/dashboard')) {
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
                        <UserProgdiLayout>
                            {children}
                        </UserProgdiLayout>
                    )
            }
        </>
    );
}

export const HOCUserUniversitas: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('UserUniversitas/dashboard')) {
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
                        <UserUniversitasLayout>
                            {children}
                        </UserUniversitasLayout>
                    )
            }
        </>
    );
}

export const HOCUPT: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('UPT/dashboard')) {
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
                        <UPTLayout>
                            {children}
                        </UPTLayout>
                    )
            }
        </>
    );
}

export const HOCBAU: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('BAU/dashboard')) {
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
                        <BAULayout>
                            {children}
                        </BAULayout>
                    )
            }
        </>
    );
}

export const HOCPROGDI: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('PROGDI/dashboard')) {
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
                        <PROGDILayout>
                            {children}
                        </PROGDILayout>
                    )
            }
        </>
    );
}

export const HOCFakultas: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('Fakultas/dashboard')) {
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
                        <FakultasLayout>
                            {children}
                        </FakultasLayout>
                    )
            }
        </>
    );
}

export const HOCPusat: NextComponentType = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    const { loggedIn, admin } = useContext(AuthContext);

    useEffect(() => {
        if (loggedIn && Router.pathname.includes('Pusat/dashboard')) {
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
                        <PusatLayout>
                            {children}
                        </PusatLayout>
                    )
            }
        </>
    );
}

export default HOC;
