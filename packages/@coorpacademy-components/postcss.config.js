module.exports = {
  plugins: [
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};
