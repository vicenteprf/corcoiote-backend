export type Customer = {
	id: number;
	name: string;
	email: string;
	imageUrl: string | null;
};

type InvoiceStatus = 'Pending' | 'Paid';

export type Invoice = {
	id: number;
	value: string;
	customerId: number;
	status: InvoiceStatus;
	createAt: Date;
	date: Date;
};

export type CreateInvoice = Omit<Invoice, 'id' | 'status' | 'create_At'>;
type InvoiceWithoutId = Omit<Invoice, 'id'>;
export type UpdateInvoice = Partial<InvoiceWithoutId>;

export type ValidationFieldError = {
	field: string;
	message: string;
};
