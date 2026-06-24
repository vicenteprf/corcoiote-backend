import express from "express";

const app = express();

app.use(express.json());

const users = [
	{
		name: "Cristiano Ronaldo",
		status: true,
	},
	{
		name: "Lionel Messi",
		status: true,
	},
	{
		name: "Neymar Júnior",
		status: false,
	},
];

app.get("/users", (_req, res) => {
	res.json(users);
});
