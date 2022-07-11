console.log('using requirements');
require('@babel/register')({
  cache: false,
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx', '.css']
});
