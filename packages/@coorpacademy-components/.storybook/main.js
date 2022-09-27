const hash = '[folder]_[local]-[hash:base64:5]';

module.exports = {
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    '@storybook/addon-controls',
    '@storybook/addon-actions'
  ],
  stories: ['../src/**/*.stories.@(js|tsx)'],
  features: {
    storyStoreV7: true
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true
      }
    }
  },
  webpackFinal: (config, {configType}) => {
    config.module.rules?.forEach(rule =>
      rule.use?.forEach(u => {
        // eslint-disable-next-line node/no-extraneous-require
        if (u.loader === require.resolve('css-loader'))
          u.options = {
            modules: {localIdentName: `${hash}`},
            importLoaders: 1
          };
      })
    );
    return config;
  }
};
