import type { Request, Response } from 'express';
import * as CustomerService from '../services/customer.service.ts';
import type { CreateCustomer, UpdateCustomer } from '../types.ts';

export function getAllCustomers(_req: Request, res: Response) {
	const customer = CustomerService.findAllCustomers();

	res.status(200).json(customer);
}

export function getCustomersById(req: Request, res: Response) {
	const id = Number(req.params.id);

	const customer = CustomerService.findAllCustomerById(id);

	res.status(200).json(customer);
}

export function createCustomers(req: Request, res: Response) {
	const { name, email } = req.body as CreateCustomer;

	const customer = CustomerService.insertCustomer({
		name,
		email,
	});

	res.status(201).json(customer);
}

export function updateCustomers(req: Request, res: Response) {
	const id = Number(req.params.id);

	const { name, email, status } = req.body as UpdateCustomer;

	const customer = CustomerService.modifyCustomer(id, { name, email, status });

	res.status(200).json(customer);
}

export function deleteCustomers(req: Request, res: Response) {
	const id = Number(req.params.id);

	CustomerService.removeCustomer(id);

	res.status(204).send();
}
