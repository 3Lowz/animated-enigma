module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    // indent: ['error', 2],
    indent: 'off',
    // '@typescript-eslint/indent': ['error', 2],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    'space-unary-ops': 2,
    'no-else-return': 1,
    'no-unreachable': 'error',
    'no-const-assign': 'error',
    // 'spaced-comment': 'always',
    'prettier/prettier': 2,
  },
}
