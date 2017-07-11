module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('postcss-reporter')({'clearMessages': true}),
    require('stylelint')({
      rules: {
        'clearMessages': true,
        'severity': 'error',
        'block-no-empty': null,
        'color-no-invalid-hex': true,
        'declaration-colon-space-after': 'always',
        'indentation': ['tab', {'except': [2]}],
        'max-empty-lines': 2,
        'color-no-hex': [true, {'severity': 'error'}],
        'declaration-block-no-duplicate-properties': true
      }
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};
