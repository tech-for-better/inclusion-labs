import logo from '../public/images/logo.svg';
import home from '../public/images/home.svg';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<Image src={logo} alt='Logo' width={170} height={20} />
			<Link href='/impact-areas'>
				<a>
					<Image alt='Home button' src={home} width={30} height={30} />
				</a>
			</Link>
		</div>
	);
}
