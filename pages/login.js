import { supabase } from '../lib/initSupabase';
import { Auth } from '@supabase/ui';
import ImpactAreas from './impact-areas';

export default function IndexPage() {
	const { user } = Auth.useUser();
	return (
		<div className='w-full h-full bg-gray-300'>
			{!user ? (
				<div>
					<Auth
						supabaseClient={supabase}
						socialLayout='horizontal'
						socialButtonSize='xlarge'
					/>
				</div>
			) : (
				<div style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}>
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
	);
}
