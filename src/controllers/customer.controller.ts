import type { Request, Response } from 'express';
import type {
	CreateCustomer,
	UpdateCustomer,
} from '../schemas/customer.schema.ts';
import * as CustomerService from '../services/customer.service.ts';

export async function getAllCustomers(_req: Request, res: Response) {
	const customers = await CustomerService.findAllCustomers();

	res.status(200).json(customers);
}

export async function getCustomerById(req: Request, res: Response) {
	const id = Number(req.params.id);

	const customer = await CustomerService.findCustomerById(id);

	res.status(200).json(customer);
}

export async function createCustomer(req: Request, res: Response) {
	const { name, email, imageUrl } = req.body as CreateCustomer;

	const customer = await CustomerService.insertCustomer({
		name,
		email,
		imageUrl,
	});

	res.status(201).json(customer);
}

export async function updateCustomer(req: Request, res: Response) {
	const id = Number(req.params.id);

	const { name, email, imageUrl } = req.body as UpdateCustomer;

	const customer = await CustomerService.modifyCustomer(id, {
		name,
		email,
		imageUrl,
	});

	res.status(200).json(customer);
}

export async function deleteCustomer(req: Request, res: Response) {
	const id = Number(req.params.id);

	await CustomerService.removeCustomer(id);

	res.status(204).send();
}
