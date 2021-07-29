import { supabase } from '../../api';

const addAnswers = async (req, res) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (req.method === 'POST') {
		let total = Object.keys(req.body).length;
		let score = Object.values(req.body).filter((x) => x === 'yes').length;
		let questionId = Object.keys(req.body)[0];

		const { data } = await supabase
			.from('questions')
			.select('impact_area_name')
			.filter('id', 'eq', questionId)
			.single();

		await supabase.from('scores').insert([
			{
				impact_area_name: data.impact_area_name,
				total: total,
				score: score,
				user_id: user.id,
			},
		]);

		for (const [key, value] of Object.entries(req.body)) {
			await supabase.from('answers').insert([
				{
					question_id: key,
					answer: value,
					user_id: user.id,
				},
			]);
		}
		res.redirect('/');
	} else {
		res.status(404).send('Not found');
	}
};

export default addAnswers;
