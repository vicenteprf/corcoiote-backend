import express from 'express';
import { pinoHttp } from 'pino-http';
import logger from './lib/logger.ts';
import errorHandler from './middlewares/errorHandler.ts';
import customerRouter from './routes/customer.routes.ts';
import invoiceRouter from './routes/invoice.routes.ts';

const app = express();

app.use(pinoHttp({ logger }));

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
