module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier':'error',
    'react/jsx-filename-extension':[
      'warn',
      {extensions:['.jsx','.js']}
    ],
    'import/prefer-default-export':'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error', {
        'semi': false,
        'singleQuote': true,
        'trailingComma': 'es5'
      }
    ],
    // para aceitar o console.tron = tron
    'no-console': ['error', {allow: ['tron']}],
    // para mudar valor de variavel vindo por parametro
    'no-param-reassign':'off'
  },
};