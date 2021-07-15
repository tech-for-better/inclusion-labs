import logo from '../public/images/logo.svg';
import home from '../public/images/home.svg';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

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
				<Image src={logo} alt='Logo' width={170} height={20} />
				<Link href='/impact-areas'>
					<a>
						<Image src={home} alt='Home button' width={30} height={30} />
					</a>
				</Link>
			</div>
		</>
	);
}
