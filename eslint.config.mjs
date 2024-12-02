// @ts-check
import astro from 'eslint-plugin-astro';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	astro.configs.recommended,
	astro.configs['jsx-a11y-strict'],
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				parser: tseslint.parser,
			},
		},
	},
	{
		files: ['**/*.astro'],
		processor: 'astro/client-side-ts',
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{ ignores: ['.astro', 'dist', '.prettierrc.mjs'] },
);
