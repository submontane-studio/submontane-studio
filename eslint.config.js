import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import typescriptParser from '@typescript-eslint/parser';
import js from '@eslint/js';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    ignores: ['**/dist/**']
  },
  js.configs.recommended,

  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
  },

  {
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin
    },
    rules: {
    }
  }
]