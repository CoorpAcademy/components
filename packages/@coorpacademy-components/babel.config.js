console.log('------>>> babel.config.js ');
module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          loose: true
        }
      ],
      '@babel/plugin-proposal-class-properties',
      'lodash'
    ],
    presets: [
      '@babel/preset-react',
      [
        'module:metro-react-native-babel-preset',
        {
          disableImportExportTransform: true
        }
      ],
      [
        '@babel/preset-typescript',
        {
          allExtensions: true,
          isTSX: true
        }
      ]
    ],
    env: {
      commonjs: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true
              },
              loose: true
            }
          ]
        ],
        plugins: [
          [
            'transform-react-remove-prop-types',
            {
              mode: 'wrap'
            }
          ]
        ]
      },
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true
              },
              loose: true
            }
          ]
        ],
        plugins: [
          [
            'css-modules-transform',
            {
              generateScopedName: '[folder]__[local]'
            }
          ],
          'istanbul'
        ]
      },
      es: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true
              },
              modules: false,
              loose: true
            }
          ]
        ],
        plugins: [
          [
            'transform-react-remove-prop-types',
            {
              mode: 'wrap'
            }
          ]
        ]
      }
    }
  };
};
