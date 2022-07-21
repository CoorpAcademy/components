module.exports = {
  files: [
    'src/**/test/**/*.js',
    'src/**/test/**/*.*ts',
    'src/**/test/**/*.tsx',
    '!**/test/**/helpers/**/*',
    '!**/test/fixtures/**/*'
  ],
  require: [`${__dirname}/ava.requirements.js`, '../../test/helpers/throw-warning'],
  extensions: ['js', 'ts', 'tsx'],
  timeout: '45s',
  workerThreads: false
};
