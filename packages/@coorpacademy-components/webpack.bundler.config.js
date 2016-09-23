const createConfig = require('./scripts/create-webpack-config');

module.exports = (bundle, dist) => {
  const entry = {bundle};

  const output = {
    path: dist
  };

  return createConfig(entry, output);
};
