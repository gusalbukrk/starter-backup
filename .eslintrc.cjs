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
    // fix 'import/no-unresolved' error
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
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
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json' },
      plugins: ['@typescript-eslint'],
      rules: {
        // disable some base rules and enable their typescript-eslint equivalents (Extension Rules) to prevent incorrect errors
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],

        // fix 'missing file extension' error
        'import/extensions': ['error', 'never'],

        // fix 'no-extraneous-dependencies' error in test files
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/__tests__/**',
              '**/*{.,_}{test,spec}.{ts,tsx}',
            ],
          },
        ],
      },
    },
  ],
};
