import { supabase } from '../api';
import useSWR from 'swr';
import { Auth } from '@supabase/ui';
import { useEffect, useState } from 'react';
import styles from '../styles/Index.module.css';
import ImpactAreas from '../components/ImpactAreas/ImpactAreas';
import Head from 'next/head';
import logo from '../public/images/logo.svg';
import Image from 'next/image';

export async function getServerSideProps() {
	const [areas, scores] = await Promise.all([
		supabase.from('impact_areas').select('*'),
		supabase.from('scores').select('*'),
	]);

	return {
		props: { areas: areas.data, scores: scores.data },
	};
}

const fetcher = (url, token) =>
	fetch(url, {
		method: 'GET',
		headers: new Headers({ 'Content-Type': 'application/json', token }),
		credentials: 'same-origin',
	}).then((res) => res.json());

const Index = ({ areas, scores }) => {
	const { user, session } = Auth.useUser();
	const { data, error } = useSWR(
		session ? ['/api/getUser', session.access_token] : null,
		fetcher
	);
	const [authView, setAuthView] = useState('sign_in');

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password');
				if (event === 'USER_UPDATED')
					setTimeout(() => setAuthView('sign_in'), 1000);
				// Send session to /api/auth route to set the auth cookie.
				// NOTE: this is only needed if you're doing SSR (getServerSideProps)!
				fetch('/api/auth', {
					method: 'POST',
					headers: new Headers({ 'Content-Type': 'application/json' }),
					credentials: 'same-origin',
					body: JSON.stringify({ event, session }),
				}).then((res) => res.json());
			}
		);

		return () => {
			authListener.unsubscribe();
		};
	}, []);

	return (
		<>
			<Head>
				<title>Inclusion Labs</title>
				<meta name='description' content='Inclusion Labs' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Domine&display=swap'
					rel='stylesheet'
				/>
			</Head>
			{!user ? (
				<div className={styles.container}>
					<div className={styles.headerContainer}>
						<Image src={logo} alt='Logo' width={300} height={50} />
					</div>
					<div className={styles.login}>
						<Auth
							styles={{ color: 'pink' }}
							socialColors={true}
							supabaseClient={supabase}
							socialLayout='horizontal'
							socialButtonSize='xlarge'
						/>
					</div>
				</div>
			) : (
				<ImpactAreas user={user} areas={areas} scores={scores} />
			)}
		</>
	);
};

export default Index;
