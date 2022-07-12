const path = require('path');
const metroBabelRegister = require('metro-babel-register');

metroBabelRegister(
  [path.join(require.resolve('react-native'), '..')],
  {lazy: true}
);
require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
});

global.__DEV__ = true;
