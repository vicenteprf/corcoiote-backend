import express from 'express';
import errorHandler from './middlewares/errorHandler.ts';
import requestLogger from './middlewares/requestLogger.ts';
import customerRouter from './routes/customer.routes.ts';
import invoiceRouter from './routes/invoice.routes.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use('/customers', customerRouter);

app.use('/invoices', invoiceRouter);

app.use((_req, res) => {
	res.status(404).json({
		message: 'Not found!',
	});
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));
