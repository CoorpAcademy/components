module.exports = {
  files: ['src/**/test/**/*.js', '!**/test/**/helpers/**/*', '!**/test/**/fixtures/**/*'],
  require: ['@babel/register']
};
