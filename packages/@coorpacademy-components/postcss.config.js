module.exports = {
  plugins: [
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('stylelint')(
    {"rules": {
        "color-no-hex": [
          true,
          {
            "message": "Please use variable colors of color.css",
            "severity": "error"
          }
        ],
        "indentation": [2]
      }
    }
    ),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};
