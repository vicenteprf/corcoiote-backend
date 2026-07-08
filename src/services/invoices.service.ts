import { invoices } from "../mocks/invoice.mock.ts";
import type { CreateInvoice, Invoice, UpdateInvoice } from "../types.ts";
import { findCustomerById } from "./customer.service.ts";

export function findAllInvoices(): Invoice[] {
	return invoices;
}

export function findInvoiceById(id: number): Invoice {
	const invoice = invoices.find((invoice) => invoice.id === id);

	if (!invoice) {
		throw new Error(`Nota não encontrado.`);
	}

	return invoice;
}

export function insertInvoice({ value, customer_id }: CreateInvoice): Invoice {
	const id = invoices[invoices.length - 1].id;

	findCustomerById(customer_id);

	const invoice: Invoice = {
		id: id + 1,
		value,
		customer_id,
		status: "Pending",
		create_At: new Date().toISOString(),
	};

	invoices.push(invoice);

	return invoice;
}

export function modifyInvoice(
	id: number,
	{ value, customer_id, status }: UpdateInvoice,
) {
	const invoice = invoices.find((invoice) => {
		return invoice.id === id;
	});

	if (!invoice) {
		throw new Error("Nota não encontrado");
	}
	if (value) invoice.value = value;
	if (customer_id) invoice.customer_id = customer_id;
	if (status !== undefined) invoice.status = status;

	return invoice;
}

export function removeInvoice(id: number): void {
	const index = invoices.findIndex((invoice) => {
		return invoice.id === id;
	});
	if (index === -1) {
		throw new Error("Nota não encontrado.");
	}

	invoices.splice(index, 1);
}
