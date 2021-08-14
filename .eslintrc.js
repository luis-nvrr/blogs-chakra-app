module.exports = {
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-expressions': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-async-promise-executor': ['off'],
    'no-empty-pattern': ['off'],
    'no-undef': ['off'],
    'no-var': ['error'],
    'spaced-comment': ['off'],
    'no-prototype-builtins': ['off'],
    'sort-keys': ['off'],
    'space-before-function-paren': ['off'],
    'linebreak-style': ['error', 'unix'],
    eqeqeq: 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'react/prop-types': 0
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier']
}

// yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-standard prettier
