export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type Invoice = {
	id: number;
	value: string;
	customer_id: number;
	status: 'Pending' | 'Paid';
	create_At: string;
};

export type CreateInvoice = Omit<Invoice, 'id' | 'status' | 'create_At'>;
type InvoiceWithoutId = Omit<Invoice, 'id'>;
export type UpdateInvoice = Partial<InvoiceWithoutId>;
