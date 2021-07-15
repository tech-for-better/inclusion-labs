import { supabase } from '../lib/initSupabase';
import { Auth } from '@supabase/ui';
import styles from '../styles/Login.module.css';
import ImpactAreas from './impact-areas';
import Header from '../components/Header';
import Image from 'next/image';

export default function IndexPage() {
	const { user } = Auth.useUser();
	return (
		<>
			<Header />
			<div className={styles.container}>
				{!user ? (
					<div className={styles.login}>
						<Auth
							styles={{ color: 'pink' }}
							socialColors={true}
							supabaseClient={supabase}
							socialLayout='horizontal'
							socialButtonSize='xlarge'
						/>
					</div>
				) : (
					<div>
						<ImpactAreas user={supabase.auth.user()} />
						<button
							onClick={async () => {
								const { error } = await supabase.auth.signOut();
								if (error) console.log('Error logging out:', error.message);
							}}
						>
							Logout
						</button>
					</div>
				)}
			</div>
		</>
	);
}
