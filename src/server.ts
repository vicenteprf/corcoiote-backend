import express from "express";
import customerRouter from "./routes/customer.rautes.ts";

const app = express();

app.use(express.json());

app.use("/customers", customerRouter);

app.use((_req, res) => {
	res.status(404).json({
		message: "Not found!",
	});
});

app.listen(Number(process.env.PORT));
