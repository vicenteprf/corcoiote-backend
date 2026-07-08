import express from 'express';
import CustomerRouter from './routes/customer.routes.ts';

const app = express();

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use((_req, res) => {
	res.status(404).json({
		message: 'Not found!',
	});
});

app.listen(Number(process.env.PORT));
