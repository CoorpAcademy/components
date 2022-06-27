module.exports = {
  files: ['src/**/*.test.*', 'test/**/*.test.*'],
  extensions: ['ts', 'tsx'],
  require: ['ts-node/register/transpile-only', './src/helpers/css-register.ts']
};
