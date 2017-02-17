const hash = '[folder]__[local]';

module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  console.log('plop');
  storybookBaseConfig.module.loaders.push({
    test: /\.css$/,
    loader: `style-loader!css-loader?minimize&modules&importLoaders=1&localIdentName=${hash}!postcss-loader`
  });

  return storybookBaseConfig;
};
