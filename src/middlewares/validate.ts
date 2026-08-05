import type { NextFunction, Request, Response } from 'express';
import type { ZodType } from 'zod';
import { ValidationError } from '../errors/index.ts';

export default function validate(schema: ZodType) {
	return (req: Request, _res: Response, next: NextFunction) => {
		const result = schema.safeParse(req.body);

		if (!result.success) {
			const fields = result.error.issues.map((issue) => ({
				field: issue.path.join(' '),
				message: issue.message,
			}));

			return next(new ValidationError('Dados inválidos.', fields));
		}

		req.body = result.data;
		next();
	};
}
