import styles from '../styles/Survey.module.css';
import Header from '../components/Header';
import Link from 'next/link';

export default function Survey() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>Impact Area</h1>
				<div>
					<p>
						Have you facilitated a diversity audit of curriculum resources and
						texts to determine what is currently being used and what areas need
						to be better developed?
					</p>
					<div>
						<input type='radio' id='yes' name='1' value='yes' />
						<label htmlFor='yes'>Yes</label>
						<input type='radio' id='no' name='1' value='no' />
						<label htmlFor='no'>No</label>
					</div>
					<p>
						How have you implemented a system that checks for biases when
						choosing teaching material?
					</p>
					<div>
						<input type='radio' id='yes' name='2' value='yes' />
						<label htmlFor='yes'>Yes</label>
						<input type='radio' id='no' name='2' value='no' />
						<label htmlFor='no'>No</label>
					</div>
					<p>
						Are your displays regularly updated with student work as well as
						teaching points from local/ global perspectives?
					</p>
					<div>
						<input type='radio' id='yes' name='3' value='yes' />
						<label htmlFor='yes'>Yes</label>
						<input type='radio' id='no' name='3' value='no' />
						<label htmlFor='no'>No</label>
					</div>
					<p>
						Do you offer a range of media and resources to educate students on
						diversity, equality and inclusion?
					</p>
					<div>
						<input type='radio' id='yes' name='4' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='4' value='no' />
						<label for='no'>No</label>
					</div>
					<p>
						How do you use diverse role models (literature, lessons) to expand
						your students’ knowledge and understanding of diversity?
					</p>
					<div>
						<input type='radio' id='yes' name='4' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='4' value='no' />
						<label for='no'>No</label>
					</div>
					<p>
						How do subject teachers present materials through multiple lenses,
						perspectives and voices?
					</p>
					<div>
						<input type='radio' id='yes' name='4' value='yes' />
						<label for='yes'>Yes</label>
						<input type='radio' id='no' name='4' value='no' />
						<label for='no'>No</label>
					</div>
					<p>
						How are new materials, perspectives and voices of specific protected
						characteristics woven into your curriculum planning?
					</p>
					<div>
						<input type='radio' id='yes' name='4' value='yes' />
						<label htmlFor='yes'>Yes</label>
						<input type='radio' id='no' name='4' value='no' />
						<label htmlFor='no'>No</label>
					</div>
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
