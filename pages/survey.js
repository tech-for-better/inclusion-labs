import Head from 'next/head';
import styles from '../styles/Survey.module.css';
import Header from '../components/Header';

export default function Survey() {
	return (
		<div className={styles.container}>
			<Head>
				<meta name='description' content='Inclusion Labs' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Problem Area</h1>
				<div>
					<p>1. Question one</p>
					<div>
						<input type='radio' id='yes' name='1' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='1' value='no' />
						<label for='no'>No</label>
					</div>
					<p>2. Question two</p>
					<div>
						<input type='radio' id='yes' name='2' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='2' value='no' />
						<label for='no'>No</label>
					</div>
					<p>3. Question three</p>
					<div>
						<input type='radio' id='yes' name='3' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='3' value='no' />
						<label for='no'>No</label>
					</div>
					<p>4. Question four</p>
					<div>
						<input type='radio' id='yes' name='4' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='4' value='no' />
						<label for='no'>No</label>
					</div>
				</div>
				<input className={styles.button} type='submit' value='Submit'></input>
			</main>
		</div>
	);
}
