import type { Invoice } from "../types.ts";

export const invoices: Invoice[] = [
	{
		id: 1,
		value: "1500,00",
		customer_id: 1,
		status: "Pending",
		create_At: "2026-07-01T10:30:00",
	},
	{
		id: 2,
		value: "3200.50",
		customer_id: 2,
		status: "Paid",
		create_At: "2026-07-03T14:15:00",
	},
	{
		id: 3,
		value: "875.75",
		customer_id: 3,
		status: "Pending",
		create_At: "2026-07-05T09:45:00",
	},
];
