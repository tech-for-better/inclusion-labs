import Header from '../components/Header/Header';
import styles from '../styles/id.module.css';
import Link from 'next/link';
import { supabase } from '../api';
import { useRouter } from 'next/router';
import { Auth } from '@supabase/ui';
import logo from '../public/images/logo.svg';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

export async function getStaticPaths() {
	const { data } = await supabase.from('impact_areas').select('id');
	const paths = data.map((area) => ({
		params: {
			id: JSON.stringify(area.id),
		},
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

export default function Post({ question }) {
	const { user } = Auth.useUser();
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<>
			{!user ? (
				<div className={styles.containerLogin}>
					<div className={styles.headerContainer}>
						<Image src={logo} alt='Logo' width={300} height={50} />
					</div>
					<div className={styles.login}>
						<Auth
							styles={{ color: 'pink' }}
							socialColors={true}
							supabaseClient={supabase}
							socialLayout='horizontal'
							socialButtonSize='xlarge'
						/>
					</div>
				</div>
			) : (
				<div className={styles.container}>
					<Header />
					<main className={styles.main}>
						<div>
							<h1 className={styles.title}>{question[0].impact_area_name}</h1>
							{question.map((question) => (
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
						<Link href='/'>
							<a>
								<input
									className={styles.button}
									type='submit'
									value='Submit'
								></input>
							</a>
						</Link>
					</main>
					<Footer />
				</div>
			)}
		</>
	);
}
