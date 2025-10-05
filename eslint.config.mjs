import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig(
  globalIgnores([
    '**/dist',
    '**/node_modules/',
    '**/public',
    'out/**',
    'build/**',
  ]),
  js.configs.recommended,
  eslintConfigPrettier,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Default
      eqeqeq: 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      //Simple-import-sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // React
      'react/no-unknown-property': 'off',
      'react/button-has-type': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'function-declaration',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
