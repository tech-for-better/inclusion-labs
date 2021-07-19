import Header from '../components/Header';
// import { getAllAreasIds, getPostData } from './impact-areas';
import styles from '../styles/Survey.module.css';
import Link from 'next/link';
import { supabase } from '../api';
import { useRouter } from 'next/router';

export default function Post({ question }) {
	console.log(question);
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			{question.map((el) => (
				<div className={styles.card} key={el.id.toString()}>
					<p>{el.name}</p>
					<div className={styles.input}>
						<input type='radio' id='yes' name={el.id.toString()} value='yes' />
						<label htmlFor='yes'>Yes</label>
						<input type='radio' id='no' name={el.id.toString()} value='no' />
						<label htmlFor='no'>No</label>
					</div>
				</div>
			))}
		</div>
	);
}

export async function getStaticPaths() {
	const { data } = await supabase.from('impact_areas').select('id');
	const paths = data.map((area) => ({
		params: { id: JSON.stringify(area.id) },
	}));
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const { id } = params;
	const { data } = await supabase
		.from('questions')
		.select()
		.filter('impact_area_id', 'eq', id);

	return {
		props: {
			question: data,
		},
	};
}
