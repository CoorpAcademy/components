const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const {pipe} = require('lodash/fp');
const config = require('./webpack.config');

const addClient = (name, input) => app => {
  const _config = config(name, input);
  const compiler = webpack(_config);
  return app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: _config.output.publicPath
    }),
    webpackHotMiddleware(compiler)
  );
};

const createServer = (name, input, addSandbox) => {
  return pipe(
    addSandbox,
    addClient(name, input)
  )(express());
};

const runServer = (name, appConfig, input, addSandbox) => {
  const app = createServer(name, input, addSandbox);
  const PORT = appConfig.port;
  const ENV = appConfig.env;

  process.on('uncaughtException', err => {
    // eslint-disable-next-line no-console
    console.error('uncaughtException', err.stack || err);
    process.exit(1);
  });

  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.info(`open ${name} on : http://localhost:${PORT} | env:${ENV}`));
};

module.exports = runServer;

