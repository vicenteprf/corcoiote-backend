import express from 'express';

const app = express();

const users = [
	{
		name: 'Cristiano Ronaldo',
		status: true,
	},
	{
		name: 'Lionel Messi',
		status: true,
	},
	{
		name: 'Neymar Junior',
		status: false,
	},
];

app.use(express.json());

app.get('/users', (_req, res) => {
	res.json(users);
});

app.listen(Number(process.env.PORT));
