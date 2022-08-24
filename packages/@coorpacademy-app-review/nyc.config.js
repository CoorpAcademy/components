module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  lines: 92,
  statements: 90,
  functions: 77,
  branches: 80,
  all: true,
  exclude: [
    'ava.config.js',
    'nyc.config.js',
    'commands',
    'coverage',
    'es',
    'lib',
    'public',
    'src/test',
    'src/actions/test',
    'src/index.tsx',
    'src/configure-store.ts',
    '**/**.test.ts',
    '**/fixtures/**'
  ]
};
