import Link from 'next/link';
import styles from '../styles/ImpactAreas.module.css';
import Header from '../components/Header';

export default function ImpactAreas() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Choose an impact area</h1>

				<div className={styles.grid}>
					<Link href='/survey'>
						<a>
							<div className={styles.card}>
								<h2>Faculty</h2>
								<p>Score:</p>
							</div>
						</a>
					</Link>

					<Link href='/survey'>
						<a>
							<div className={styles.card}>
								<h2>Curriculum</h2>
								<p>Score:</p>
							</div>
						</a>
					</Link>

					<Link href='/survey'>
						<a>
							<div className={styles.card}>
								<h2>Resources</h2>
								<p>Score:</p>
							</div>
						</a>
					</Link>

					<Link href='/survey'>
						<a>
							<div className={styles.card}>
								<h2>Teaching</h2>
								<p>Score:</p>
							</div>
						</a>
					</Link>

					<Link href='/survey'>
						<a>
							<div className={styles.card}>
								<h2>Assemblies</h2>
								<p>Score:</p>
							</div>
						</a>
					</Link>

					<Link href='/survey'>
						<a>
							<div className={styles.card}>
								<h2>Extra Curricular</h2>
								<p>Score:</p>
							</div>
						</a>
					</Link>
				</div>
			</main>
		</>
	);
}
