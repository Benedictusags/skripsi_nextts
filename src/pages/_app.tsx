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
import { HOC, HOCUser } from '~/src/utils/withAdminAuth';
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