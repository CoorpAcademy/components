module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('stylelint')({
      rules: {
        'color-no-invalid-hex': [true, {severity: 'error'}],
        'color-no-hex': [true, {severity: 'error'}],
        'declaration-colon-space-after': 'always',
        'declaration-block-no-duplicate-properties': true,
        indentation: ['tab', {'except': [2]}],
        'max-empty-lines': 2
        }
    }),
    require('postcss-reporter')({clearAllMessages: true}),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};
