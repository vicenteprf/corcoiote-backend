module.exports = {
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts$': [
			'@swc/jest',
			{
				jsc: {
					parser: { syntax: 'typescript' },
					target: 'esnext',
				},
				module: { type: 'commonjs' },
			},
		],
	},
	moduleNameMapper: {
		'^(@prisma/client/runtime/.*)\\.mjs$': '$1.js',
	},
	testeMatch: ['<rootDir>/tests/**/*.test.ts'],
};
