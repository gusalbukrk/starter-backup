// https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats
// use .eslintrc.cjs when running ESLint in JavaScript packages that specify `"type": "module "`
// Note that ESLint does not support ESM configuration at this time

module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:react/recommended',
    'plugin:jest/all',
  ],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2021, // equivalent to 12
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',

    'import/extensions': [
      'error',
      'always', // should be `always` when `"type": "module"`
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['webpack.*.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
