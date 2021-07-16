import Link from 'next/link';
import styles from '../styles/ImpactAreas.module.css';
import Header from '../components/Header';
import { supabase } from '../api';

export async function getServerSideProps() {
	const { data } = await supabase.from('impact_areas').select('name');

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
					{areas.map((element) => (
						<Link href='/survey'>
							<a>
								<div className={styles.card}>
									<h2>{element.name}</h2>
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
