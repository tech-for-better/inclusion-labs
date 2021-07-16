import Link from 'next/link';
import styles from '../styles/ImpactAreas.module.css';
import Header from '../components/Header';
import { supabase } from '../api';

export async function getServerSideProps() {
	const { data } = await supabase.from('impact_areas').select('id, name');

	return {
		props: {
			areas: data,
		},
	};
}

export default function ImpactAreas({ areas }) {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Choose an impact area</h1>

				<div className={styles.grid}>
					{areas.map((area) => (
						<Link href='/survey' key={area.id.toString()}>
							<a>
								<div className={styles.card}>
									<h2>{area.name}</h2>
									<p>Score:</p>
								</div>
							</a>
						</Link>
					))}
				</div>
			</main>
		</>
	);
}
