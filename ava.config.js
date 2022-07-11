module.exports = {
  files: ['src/**/test/**/*.js', '!**/test/**/helpers/**/*', '!**/test/**/fixtures/**/*'],
  require: [`${__dirname}/ava.requirements.js`]
};
