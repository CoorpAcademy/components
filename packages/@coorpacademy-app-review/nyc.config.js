module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  statements: 98.95,
  branches: 96.46,
  functions: 96.51,
  lines: 99.08,
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
