const { resolve } = require('path');

module.exports = {
  root: true,

  parserOptions: {
    extraFileExtensions: ['.svelte'],
    project: resolve(__dirname, './tsconfig.json'),
  },

  env: {
    es6: true,
    browser: true,
  },

  settings: {
    'svelte3/typescript': require('typescript'),
    'import/resolver': {
      typescript: {},
    },
  },

  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],

  plugins: ['svelte3', 'simple-import-sort'],

  rules: {
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
  },

  overrides: [
    {
      files: ['./src/**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
  ],
};
