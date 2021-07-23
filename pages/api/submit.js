export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body); // { message: "hello this is my message" }
        // supabase.from('answers').insert(req.body); // you'll probs need to change the form data to fit your schema etc
        // res.redirect('/success'); // or wherever you wanna go after
        for (const [key, value] of Object.entries(req.body)) {
            console.log(key, value);
        }
    } else {
        res.status(404).send('Not found');
    }
}