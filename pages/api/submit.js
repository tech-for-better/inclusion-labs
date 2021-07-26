import { supabase } from '../../api';

const addAnswers = async (req, res) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (req.method === 'POST') {
		// for (const [key, value] of Object.entries(req.body)) {
		// 	supabase.from('answers').insert([
		// 		{
		// 			question_id: key,
		// 			answer: value,
		// 			user_id: user.id,
		// 		},
		// 	]);

		supabase
			.from('answers')
			.insert([
				{
					question_id: 1,
					answer: 'yes',
					user_id: user.id,
				},
			])
			.single();

		res.redirect('/');
	} else {
		res.status(404).send('Not found');
	}
};

export default addAnswers;
