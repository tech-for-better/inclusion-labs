import { supabase } from '../api';
import { useRouter } from 'next/router';
import { Auth } from '@supabase/ui';
import Header from '../components/Header/Header';
import styles from '../styles/id.module.css';
import logo from '../public/images/logo.svg';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

export async function getServerSideProps({ params, req }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	const { id } = params;

	if (!user) {
		return { props: {}, redirect: { destination: '/', permanent: false } };
	}
	const { data } = await supabase
		.from('questions')
		.select()
		.filter('impact_area_id', 'eq', id);

	return {
		props: {
			question: data,
			user: user,
		},
	};
}

export default function Post({ question, user }) {
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
							<form action='/api/submit' method='post'>
								{question.map((question) => (
									<div className={styles.card} key={question.id.toString()}>
										<p>{question.name}</p>
										<div className={styles.input}>
											<input
												type='radio'
												id='yes'
												name={question.id.toString()}
												value='yes'
												required
											/>
											<label htmlFor='yes'>Yes</label>
											<input
												type='radio'
												id='no'
												name={question.id.toString()}
												value='no'
												required
											/>
											<label htmlFor='no'>No</label>
										</div>
									</div>
								))}
								<div className={styles.input}>
									<button className={styles.button} type='submit'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</main>
					<Footer />
				</div>
			)}
		</>
	);
}
