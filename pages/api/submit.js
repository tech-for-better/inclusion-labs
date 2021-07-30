import { supabase } from '../../api';

const addAnswers = async (req, res) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (req.method === 'POST') {
		let score = Object.values(req.body).filter((x) => x === 'yes').length;
		let questionId = Object.keys(req.body)[0];

		for (const [key, value] of Object.entries(req.body)) {
			const { data } = await supabase
				.from('answers')
				.select('*')
				.filter('user_id', 'eq', user.id)
				.filter('question_id', 'eq', key);
			if (data.length === 0) {
				await supabase.from('answers').insert([
					{
						question_id: key,
						answer: value,
						user_id: user.id,
					},
				]);
			} else {
				await supabase
					.from('answers')
					.update([
						{
							answer: value,
						},
					])
					.eq('question_id', key)
					.eq('user_id', user.id)
					.single();
			}
		}

		const { data } = await supabase
			.from('questions')
			.select('impact_area_name')
			.filter('id', 'eq', questionId)
			.single();

		const scoreResult = await supabase
			.from('scores')
			.select('*')
			.filter('user_id', 'eq', user.id)
			.filter('impact_area_name', 'eq', data.impact_area_name);
		if (scoreResult.data.length === 0) {
			await supabase.from('scores').insert([
				{
					impact_area_name: data.impact_area_name,
					score: score,
					user_id: user.id,
				},
			]);
		} else {
			await supabase
				.from('scores')
				.update([
					{
						score: score,
					},
				])
				.eq('impact_area_name', data.impact_area_name)
				.eq('user_id', user.id)
				.single();
		}
		res.redirect('/');
	} else {
		res.status(404).send('Not found');
	}
};

export default addAnswers;
