import { z } from 'zod';

export const loginSchema = z.object({
	body: z.object({
		Email: z.string().nonempty('Email is required').email({
			message: 'Correjir el email',
		}),
		Password: z.string().nonempty('Password is required').min(6, 'Password to short'),
	}),
});
