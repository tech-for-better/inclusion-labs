import Link from 'next/link';
import Header from '../Header/Header';
import styles from './ImpactAreas.module.css';
import Footer from '../Footer/Footer';

export default function ImpactAreas({ data }) {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}> Choose an Impact Area </h1>
				<div className={styles.grid}>
					{data.map((area) => (
						<Link href={area.id.toString()} key={area.id.toString()}>
							<a>
								<div className={styles.card}>
									<h2> {area.name} </h2> <p> Total points: 60 </p>
									<p> Your points: 0 </p>
								</div>
							</a>
						</Link>
					))}
				</div>
				<Footer />
			</main>
		</>
	);
}
