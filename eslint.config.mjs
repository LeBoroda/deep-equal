import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import eslintRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default defineConfig([
  eslintRecommended,
  globalIgnores(['./dist/*.js', './dist/*.ts']),
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      js,
      '@typescript-eslint': tseslint,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-useless-escape': ['error', { allowRegexCharacters: ['-'] }],
    },
  },
  {
    files: ['src/**/*.test.{js,ts}'],
    ...jest.configs['flat/recommended'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
