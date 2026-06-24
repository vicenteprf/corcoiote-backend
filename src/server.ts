import http from 'node:http';

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

http
	.createServer((req, res) => {
		if (req.url === 'users' && req.method === 'GET') {
			res.writeHead(200, {
				'content-type': 'application/json',
			});
			res.end(JSON.stringify(users));
			return;
		}
		res.writeHead(404, {
			'content-type': 'text/plain',
		});
		res.end('Not foun!');
	})
	.listen(Number(process.env.PORT));
