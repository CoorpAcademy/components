module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  lines: 97.5,
  statements: 97.47,
  functions: 90,
  branches: 92.31,
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
