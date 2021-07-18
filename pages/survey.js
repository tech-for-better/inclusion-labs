import styles from '../styles/Survey.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import { supabase } from '../api';

export async function getServerSideProps() {
	const { data } = await supabase.from('questions').select('id, name');

	return {
		props: {
			questions: data,
		},
	};
}

export default function Survey({ questions }) {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Impact Area</h1>
				<div>
					{questions.map((question) => (
						<div className={styles.card} key={question.id.toString()}>
							<p>{question.name}</p>
							<div className={styles.input}>
								<input
									type='radio'
									id='yes'
									name={question.id.toString()}
									value='yes'
								/>
								<label htmlFor='yes'>Yes</label>
								<input
									type='radio'
									id='no'
									name={question.id.toString()}
									value='no'
								/>
								<label htmlFor='no'>No</label>
							</div>
						</div>
					))}
				</div>
				<Link href='/impact-areas'>
					<a>
						<input
							className={styles.button}
							type='submit'
							value='Submit'
						></input>
					</a>
				</Link>
			</main>
		</div>
	);
}
