import { NotFoundError } from '../errors/index.ts';
import { customers } from '../mocks/customer.mock.ts';
import type { CreateCustomer, Customer, UpdateCustomer } from '../types.ts';

export function findAllCustomers(): Customer[] {
	return customers;
}

export function findCustomerById(id: number): Customer {
	const customer = customers.find((customer) => customer.id === id);

	if (!customer) {
		throw new NotFoundError('Cliente não encontrado.');
	}

	return customer;
}

export function insertCustomer({ name, email }: CreateCustomer): Customer {
	const id = customers[customers.length - 1].id;

	const customer: Customer = {
		id: id + 1,
		name,
		email,
		status: true,
	};
	customers.push(customer);

	return customer;
}

export function modifyCustomer(
	id: number,
	{ name, email, status }: UpdateCustomer,
) {
	const customer = customers.find((customer) => customer.id === id);

	if (!customer) {
		throw new NotFoundError('Cliente não encontrado.');
	}

	if (name) customer.name = name;
	if (email) customer.email = email;
	if (status !== undefined) customer.status = status;

	return customer;
}

export function removeCustomer(id: number): void {
	const index = customers.findIndex((customers) => customers.id === id);

	if (index === -1) {
		throw new NotFoundError('Cliente não encontrado.');
	}

	customers.splice(index, 1);
}
