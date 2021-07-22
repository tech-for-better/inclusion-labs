import { Auth } from '@supabase/ui';
import { supabase } from '../api';
// import HeadFunction from '../components/Head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		// <>
		// 	<HeadFunction />
		<Auth.UserContextProvider supabaseClient={supabase}>
			<Component {...pageProps} />
		</Auth.UserContextProvider>
		// </>
	);
}

export default MyApp;
