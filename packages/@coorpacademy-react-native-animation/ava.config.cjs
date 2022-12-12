module.exports = {
  files: ['src/**/test/**/*.*ts', 'src/**/test/**/*.tsx'],
  extensions: ['ts', 'tsx'],
  timeout: '30s',
  // require: [`${__dirname}/ava.requirements.js`],
  require: ['@babel/register'],
  workerThreads: false
};
