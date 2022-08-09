module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'next/core-web-vitals',
  ],
  ignorePatterns: [
    '*.cjs',
    '.DS_Store',
    'node_modules',
    '/build',
    '/.next',
    '/package',
    '.env',
    '.env.*',
    '!.env.example',
    '*.html',
    'pnpm-lock.yaml',
    'package-lock.json',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
  },
};
