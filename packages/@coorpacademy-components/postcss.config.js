module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('postcss-reporter')({clearAllMessages: true}),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};
