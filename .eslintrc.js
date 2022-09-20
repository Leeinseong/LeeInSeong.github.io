module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['next', 'next/core-web-vitals', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['.eslintrc.js'],
  rules: { 'react/no-unescaped-entities': 0 },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
