module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  lines: 92,
  statements: 90,
  functions: 76,
  branches: 79,
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
    'src/index.tsx',
    'src/configure-store.tsx',
    'src/services',
    '**/**.test.ts',
    '**/fixtures/**'
  ]
};
