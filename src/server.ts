import http from "node:http";

const users = [
	{
		name: "Messi",
		status: true,
	},
	{
		name: "C. Ronaldo",
		status: true,
	},
	{
		name: "Wesley",
		status: false,
	},
];

http
	.createServer((req, res) => {
		if (req.url === "/users" && req.method === "GET") {
			res.writeHead(200, { "content-type": "application/json" });
			res.end(JSON.stringify(users));
			return;
		}
		res.writeHead(404, { "content-type": "text/plain" });
		res.end("not found");
	})
	.listen(Number(process.env.PORT));
