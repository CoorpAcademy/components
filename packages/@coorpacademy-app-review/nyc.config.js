module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  statements: 98.86,
  branches: 96.36,
  functions: 96.25,
  lines: 99.01,
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
    '**/test/**',
    'src/index.tsx',
    'src/configure-store.ts',
    'src/services/index.ts',
    'src/services/tools',
    '**/fixtures/**'
  ]
};
