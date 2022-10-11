module.exports = {
  files: ['src/**/*.test.*', 'test/**/*.test.*'],
  extensions: ['ts', 'tsx'],
  timeout: '30s',
  // https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
  require: ['ts-node/register/transpile-only', './src/helpers/css-register.ts'],
  environmentVariables: {
    API_TEST_TOKEN:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjoiNTkyZDgzMGIyNDBiOTIzZjAwYmZmYmE2IiwiaG9zdCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJ9.uhlenI-dZCYm043sOSVHGbxjbpvGVlHWTdNaFDW5nFQ',
      LAMBDA_REVIEW_URL: 'http://localhost:7006'
  }
};
