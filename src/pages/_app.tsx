import React, { useEffect } from 'react';
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
import { HOC, HOCUser, HOCUPT, HOCBAU, HOCPROGDI, HOCPusat, HOCFakultas } from '~/src/utils/withAdminAuth';
import NormalLayout from '~/src/layouts/NormalLayout';
import AuthLayout from '~/src/layouts/AuthLayout';

// Store
import Store from '~/src/store/index';

export default function MyApp({ Component, pageProps, router }) {

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((auth) => {
			if (!auth) {
				const path = Router.pathname;
				if (path.includes('admin/dashboard')) {
					Router.push('/admin');
				}

				if (path.includes('user/dashboard')) {
					Router.push('/user');
				}
				if (path.includes('UPT/dashboard')) {
					Router.push('/UPT');
				}
				if (path.includes('BAU/dashboard')) {
					Router.push('/BAU');
				}
				if (path.includes('PROGDI/dashboard')) {
					Router.push('/PROGDI');
				}
				if (path.includes('Fakultas/dashboard')) {
					Router.push('/Fakultas');	
				}
				if (path.includes('Pusat/dashboard')) {
					Router.push('/Pusat');
				}
				
			}
		});
	}, []);

	
	if (router.pathname.includes('user/dashboard')) {
		return (
			<Store>
				<HOCUser>
					<Component {...pageProps} />
				</HOCUser>
			</Store>
		);
	}

	if (router.pathname.includes('UPT/dashboard')) {
		return (
			<Store>
				<HOCUPT>
					<Component {...pageProps} />
				</HOCUPT>
			</Store>
		);
	}

	if (router.pathname.includes('BAU/dashboard')) {
		return (
			<Store>
				<HOCBAU>
					<Component {...pageProps} />
				</HOCBAU>
			</Store>
		);
	}

	if (router.pathname.includes('PROGDI/dashboard')) {
		return (
			<Store>
				<HOCPROGDI>
					<Component {...pageProps} />
				</HOCPROGDI>
			</Store>
		);
	}

	if (router.pathname.includes('Fakultas/dashboard')) {
		return (
			<Store>
				<HOCFakultas>
					<Component {...pageProps} />
				</HOCFakultas>
			</Store>
		);
	}

	if (router.pathname.includes('Pusat/dashboard')) {
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


	if (router.pathname.includes('admin') || router.pathname.includes('user')) {
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