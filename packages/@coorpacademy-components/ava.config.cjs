module.exports = {
  files: ['src/**/test/**/*.*s', '!**/test/**/helpers/**/*', '!**/test/fixtures/**/*'],
  require: [`${__dirname}/ava.requirements.js`, '../../test/helpers/throw-warning'],
  extensions: ['js', 'ts'],
  timeout: '45s',
  workerThreads: false
};
