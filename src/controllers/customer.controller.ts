import type { Request, Response } from 'express';
import type {
	CreateCustomer,
	UpdateCustomer,
} from '../schemas/customer.schema.ts';
import * as CustomerService from '../services/customer.service.ts';

export function getAllCustomers(_req: Request, res: Response) {
	const customers = CustomerService.findAllCustomers();

	res.status(200).json(customers);
}

export function getCustomerById(req: Request, res: Response) {
	const id = Number(req.params.id);

	const customer = CustomerService.findCustomerById(id);

	res.status(200).json(customer);
}

export function createCustomer(req: Request, res: Response) {
	const { name, email, imageUrl } = req.body as CreateCustomer;

	const customer = CustomerService.insertCustomer({
		name,
		email,
		imageUrl,
	});

	res.status(201).json(customer);
}

export function updateCustomer(req: Request, res: Response) {
	const id = Number(req.params.id);

	const { name, email, imageUrl } = req.body as UpdateCustomer;

	const customer = CustomerService.modifyCustomer(id, {
		name,
		email,
		imageUrl,
	});

	res.status(200).json(customer);
}

export function deleteCustomer(req: Request, res: Response) {
	const id = Number(req.params.id);

	CustomerService.removeCustomer(id);

	res.status(204).send();
}
