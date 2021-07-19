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

// export function getAllAreasIds({ areas }) {
// 	return areas.map((area = area[id]) => {
// 		return {
// 			params: {
// 				id: area,
// 			},
// 		};
// 	});
// }

// export function getPostData(id) {
// 	const fullPath = path.join(postsDirectory, `${id}.md`);
// 	const fileContents = fs.readFileSync(fullPath, 'utf8');

// 	// Use gray-matter to parse the post metadata section
// 	const matterResult = matter(fileContents);

// 	// Combine the data with the id
// 	return {
// 		id,
// 		...matterResult.data,
// 	};
// }

export default function ImpactAreas({ areas }) {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Choose an impact area</h1>
				<div className={styles.grid}>
					{areas.map((area) => (
						<Link href={area.id.toString()} key={area.id.toString()}>
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
