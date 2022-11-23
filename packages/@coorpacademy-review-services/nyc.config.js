module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  statements: 100,
  branches: 100,
  functions: 100,
  lines: 100,
  all: true,
  exclude: ['ava.config.js', 'nyc.config.js', 'coverage', 'es', 'lib', 'src/test', 'src/tools']
};
