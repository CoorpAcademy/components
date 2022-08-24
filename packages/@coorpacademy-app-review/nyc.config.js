module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  lines: 90,
  statements: 90,
  functions: 77,
  branches: 75,
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
    'src/services/index.ts',
    '**/**.test.ts',
    '**/fixtures/**'
  ]
};
