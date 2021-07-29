import Link from 'next/link';
import Header from '../Header/Header';
import styles from './ImpactAreas.module.css';
import Footer from '../Footer/Footer';

export default function ImpactAreas({ areas, scores }) {
	for (let area of areas) {
		for (let score of scores) {
			if (Object.values(score).includes(area.name)) {
				area.total = score.total;
				area.score = score.score;
			}
		}
	}

	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}> Choose an Impact Area </h1>
				<div className={styles.grid}>
					{areas.map((area) => (
						<Link href={area.id.toString()} key={area.id.toString()}>
							<a>
								<div className={styles.card}>
									<h2> {area.name} </h2>
									<p> Your points: {area.score} </p>
									<p> Total points: {area.total} </p>
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
