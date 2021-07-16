import { supabase } from '../lib/initSupabase';
import { Auth } from '@supabase/ui';
import styles from '../styles/Index.module.css';
import ImpactAreas from './impact-areas';
import Head from 'next/head';
import logo from '../public/images/logo.svg';
import Image from 'next/image';

export default function IndexPage() {
	const { user } = Auth.useUser();
	return (
		<>
			<Head>
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
			<div className={styles.headerContainer}>
				<Image src={logo} alt='Logo' width={300} height={50} />
			</div>
			<div className={styles.container}>
				{!user ? (
					<div className={styles.login}>
						<Auth
							styles={{ color: 'pink' }}
							socialColors={true}
							supabaseClient={supabase}
							socialLayout='horizontal'
							socialButtonSize='xlarge'
						/>
					</div>
				) : (
					<div>
						<ImpactAreas user={supabase.auth.user()} />
						<button
							onClick={async () => {
								const { error } = await supabase.auth.signOut();
								if (error) console.log('Error logging out:', error.message);
							}}
						>
							Logout
						</button>
					</div>
				)}
			</div>
		</>
	);
}
