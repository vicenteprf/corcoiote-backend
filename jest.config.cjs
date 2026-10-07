module.exports = {
	testEnvironmet: 'node',
	transform: {
		'^.+\\.ts$': [
			'@swc/jest',
			{
				jsc: {
					parse: { syntax: 'typescript' },
					target: 'exnext',
				},
				module: { type: 'commonjs' },
			},
		],
	},
};
