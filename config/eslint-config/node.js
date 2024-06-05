/**@type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['simples-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}