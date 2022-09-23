module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  statements: 99.25,
  branches: 98.06,
  functions: 97.83,
  lines: 99.39,
  all: true,
  exclude: [
    'ava.config.js',
    'nyc.config.js',
    'webpack.config.js',
    'commands',
    'coverage',
    'es',
    'lib',
    'sandbox',
    'static',
    'src/test',
    '**/test/**',
    'src/index.tsx',
    'src/configure-store.ts',
    'src/services/index.ts',
    'src/services/tools',
    '**/fixtures/**'
  ]
};
