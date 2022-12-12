module.exports = Object.assign({}, require('../../nyc.config'), {
  lines: 100,
  statements: 100,
  functions: 100,
  branches: 100
});
