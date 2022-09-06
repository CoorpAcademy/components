module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  statements: 97.5,
  branches: 93.33,
  functions: 90,
  lines: 97.52,
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
