module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require("postcss-reporter")({"clearMessages": true}),
    require('stylelint')({
      "rules": {
        'block-no-empty': null,
        'color-no-invalid-hex': true,
        'declaration-colon-space-after': 'always',
        'indentation': ['tab', {'except': [2]}],
        'max-empty-lines': 2,
        'color-no-hex': [
          true,
          {
            'severity': 'error',
            'message': 'Please use variable colors of color.css'
          }
        ]
      }
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};
