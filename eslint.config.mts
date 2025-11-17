import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        files: [
            '**/src/**/*.{js,mjs,cjs,ts,mts,cts}',
            '**/tests/**/*.{js,mjs,cjs,ts,mts,cts}',
        ],
        ignores: ['dist/**', 'vitest.config.ts', 'node_modules/**'],
        plugins: { '@typescript-eslint': tseslint.plugin },
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        languageOptions: {
            parser: tseslint.parser,
            globals: globals.node,
        },
    },
    tseslint.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
])
