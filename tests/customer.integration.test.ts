import request from 'supertest';
import app from '../src/app.ts';
import prisma from '../src/lib/prisma.ts';

beforeEach(async () => {
	await prisma.invoice.deleteMany();
	await prisma.customer.deleteMany();
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('GET /customers', () => {
	test('devolve 404 quando o cliente não existe', async () => {
		const response = await request(app).get('/customers/999');

		expect(response.status).toBe(404);
		expect(response.body.message).toBe('Cliente não encontrado.');
	});
});

describe('POST /customers', () => {
	test('cria um cliente e devolve 201 com o registro criado', async () => {
		const response = await request(app).post('/customers').send({
			name: 'Vicente Ramos',
			email: 'vicente@email.com',
		});

		expect(response.status).toBe(201);
		expect(response.body).toMatchObject({
			name: 'Vicente Ramos',
			email: 'vicente@email.com',
		});
	});

	test('retorna erro 400 quando o email é inválido', async () => {
		const response = await request(app).post('/customers').send({
			name: 'Vicente Ramos',
			email: 'não é um email',
		});

		expect(response.status).toBe(400);
		expect(response.body.fields).toEqual(
			expect.arrayContaining([expect.objectContaining({ field: 'email' })]),
		);
	});
});
