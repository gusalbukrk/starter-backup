// https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats
// use .eslintrc.cjs when running ESLint in JavaScript packages that specify `"type": "module "`
// Note that ESLint does not support ESM configuration at this time

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
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
