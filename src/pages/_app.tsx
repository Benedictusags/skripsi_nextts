import React, { useEffect, useContext } from 'react';
import Router from 'next/router';

// Firebase
import { firebaseApp } from '~/src/utils/Firebase';

// Global CSS
import '~/public/fonts/open_sans.css'
import "~/public/vendor/nucleo/css/nucleo.css";
import "~/public/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "~/public/css/argon-dashboard-react.css";
import 'aos/dist/aos.css';

// Layout
import { HOC, HOCUserFakultas, HOCUserProgdi, HOCUserUniversitas, HOCUPT, HOCBAU, HOCPROGDI, HOCPusat, HOCFakultas } from '~/src/utils/withAdminAuth';
import NormalLayout from '~/src/layouts/NormalLayout';
import AuthLayout from '~/src/layouts/AuthLayout';

import "react-datepicker/dist/react-datepicker.css";



// Store
import Store from '~/src/store/index';

import { AuthContext } from '~/src/store/context';

export default function MyApp({ Component, pageProps, router }) {

	const { loggedIn } = useContext(AuthContext);

	useEffect(() => {
			if (!loggedIn) {
				const path = Router.pathname;
				if (path.includes('admin/dashboard')) {
					Router.push('/admin');
				}

				if (path.includes('userfakultas/dashboard')) {
					Router.push('/userfakultas');
				}
				if (path.includes('userprogdi/dashboard')) {
					Router.push('/userprogdi');
				}
				if (path.includes('useruniversitas/dashboard')) {
					Router.push('/useruniversitas');
				}
				if (path.includes('upt/dashboard')) {
					Router.push('/upt');
				}
				if (path.includes('bau/dashboard')) {
					Router.push('/bau');
				}
				if (path.includes('adminprogdi/dashboard')) {
					Router.push('/adminprogdi');
				}
				if (path.includes('adminfakultas/dashboard')) {
					Router.push('/adminfakultas');	
				}
				if (path.includes('adminuniversitas/dashboard')) {
					Router.push('/adminuniversitas');
				}
				
			}
	}, [loggedIn]);

	
	if (router.pathname.includes('userfakultas/dashboard')) {
		return (
			<Store>
				<HOCUserFakultas>
					<Component {...pageProps} />
				</HOCUserFakultas>
			</Store>
		);
	}

	if (router.pathname.includes('userprogdi/dashboard')) {
		return (
			<Store>
				<HOCUserProgdi>
					<Component {...pageProps} />
				</HOCUserProgdi>
			</Store>
		);
	}

	if (router.pathname.includes('useruniversitas/dashboard')) {
		return (
			<Store>
				<HOCUserUniversitas>
					<Component {...pageProps} />
				</HOCUserUniversitas>
			</Store>
		);
	}

	if (router.pathname.includes('upt/dashboard')) {
		return (
			<Store>
				<HOCUPT>
					<Component {...pageProps} />
				</HOCUPT>
			</Store>
		);
	}

	if (router.pathname.includes('bau/dashboard')) {
		return (
			<Store>
				<HOCBAU>
					<Component {...pageProps} />
				</HOCBAU>
			</Store>
		);
	}

	if (router.pathname.includes('adminprogdi/dashboard')) {
		return (
			<Store>
				<HOCPROGDI>
					<Component {...pageProps} />
				</HOCPROGDI>
			</Store>
		);
	}

	if (router.pathname.includes('adminfakultas/dashboard')) {
		return (
			<Store>
				<HOCFakultas>
					<Component {...pageProps} />
				</HOCFakultas>
			</Store>
		);
	}

	if (router.pathname.includes('adminuniversitas/dashboard')) {
		return (
			<Store>
				<HOCPusat>
					<Component {...pageProps} />
				</HOCPusat>
			</Store>
		);
	}


	if (router.pathname.includes('admin/dashboard')) {
		return (
			<Store>
				<HOC>
					<Component {...pageProps} />
				</HOC>
			</Store>
		);
	}


	if (router.pathname.includes('admin') ||  router.pathname.includes('useruniversitas') || router.pathname.includes('userfakultas') || router.pathname.includes('userprogdi') || router.pathname.includes('upt') || router.pathname.includes('bau') || router.pathname.includes('adminfakultas') || router.pathname.includes('adminprogdi') || router.pathname.includes('adminuniversitas')) {
		return (
			<Store>
				<AuthLayout>
					<Component {...pageProps} />
				</AuthLayout>
			</Store>
		);
	}

	return (
		<Store>
			<NormalLayout>
				<Component {...pageProps} />
			</NormalLayout>
		</Store>
	)

}