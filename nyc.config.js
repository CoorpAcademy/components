module.exports = {
  include: ['src/**'],
  reporter: ['lcov', 'text-summary'],
  exclude: ['**/test/', '**/es/', '**/lib/'],
  'check-coverage': true,
  lines: 100,
  statements: 100,
  functions: 100,
  branches: 100,
  cache: true,
  require: '@babel/register',
  sourceMap: false,
  instrument: false,
  all: true
};
