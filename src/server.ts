import http from "node:http";

http
	.createServer(() => {
		console.log("Hello bb ;)");
	})
	.listen(Number(process.env.PORT));
