import Link from 'next/link';
import Header from './Header';
import styles from '../styles/ImpactAreas.module.css';
import { useState, useEffect } from 'react';
import { supabase } from '../api';

export default function ImpactAreas() {
	const [areas, setAreas] = useState([]);

	useEffect(() => {
		fetchAreas();
	}, []);

	const fetchAreas = async () => {
		let { data: areas, error } = await supabase
			.from('impact_areas')
			.select('*');
		if (error) console.log('error', error);
		else setAreas(areas);
	};

	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}> Choose an impact area </h1>
				<div className={styles.grid}>
					{areas.map((area) => (
						<Link href={area.id.toString()} key={area.id.toString()}>
							<a>
								<div className={styles.card}>
									<h2> {area.name} </h2> <p> Total points: 50 </p>
									<p> Your points: 0 </p>
								</div>
							</a>
						</Link>
					))}
				</div>
			</main>
		</>
	);
}
