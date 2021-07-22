import logo from '../../public/images/logo.svg';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { supabase } from '../../api';

export default function Header() {
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
				<Link href='/'>
					<a>
						<Image src={logo} alt='Logo' width={200} height={50} />
					</a>
				</Link>
				<Link href='/'>
					<a>
						<button
							className={styles.button}
							onClick={async () => {
								const { error } = await supabase.auth.signOut();
								if (error) console.log('Error logging out:', error.message);
							}}
						>
							Logout
						</button>
					</a>
				</Link>
			</div>
		</>
	);
}
