import type { Request, Response } from 'express';
import * as InvoiceService from '../services/invoices.service.ts';
import type { CreateInvoice, UpdateInvoice } from '../types.ts';

export function getAllInvoice(_req: Request, res: Response) {
	const invoices = InvoiceService.findAllInvoices();

	res.status(200).json(invoices);
}

export function getInvoiceById(req: Request, res: Response) {
	const id = Number(req.params.id);

	const invoice = InvoiceService.findInvoiceById(id);

	res.status(200).json(invoice);
}

export function createInvoice(req: Request, res: Response) {
	const { value, customer_id } = req.body as CreateInvoice;

	const invoice = InvoiceService.insertInvoice({
		value,
		customer_id,
	});

	res.status(201).json(invoice);
}

export function updateInvoice(req: Request, res: Response) {
	const id = Number(req.params.id);

	const { value, status, customer_id } = req.body as UpdateInvoice;

	const invoice = InvoiceService.modifyInvoice(id, {
		value,
		status,
		customer_id,
	});

	res.status(200).json(invoice);
}

export function deleteInvoice(req: Request, res: Response) {
	const id = Number(req.params.id);

	InvoiceService.removeInvoice(id);

	res.status(204).send();
}
