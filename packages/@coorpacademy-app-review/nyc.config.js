module.exports = {
  extension: ['.ts', '.tsx'],
  'check-coverage': true,
  reporter: ['html', 'text-summary'],
  statements: 99.47,
  branches: 99.38,
  functions: 96.97,
  lines: 99.4,
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
