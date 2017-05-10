const {join} = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const {appConfig} = require('@coorpacademy/components-bundler');

const {pipe} = require('lodash/fp');

const addForum = app => {
  return app.get('/', (req, res) => {
    res.send(
      `
      <div id="forum"></div>
      <script type="text/javascript" src="/dist/forum.js"></script>
      <script>
        Forum.create({
          container: document.getElementById('forum'),
          channel: 'frcoorpacademy/discipline/15/module/15.B-development',
          api: 'http://localhost:3000/api/v1'
        });
      </script>
    `
    );
  });
};

const addClient = app => {
  const config = appConfig('Forum', join(__dirname, './stones'));

  const compiler = webpack(config, function(err, stats) {
    if (err) {
      process.stderr.write(err.stack);
      return;
    }
    const statsOutput = stats.toString(config.stats || 'none');
    process.stdout.write(`[app-sandbox] ${statsOutput}`);
  });

  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      hot: true,
      publicPath: config.output.publicPath
    }),
    webpackHotMiddleware(compiler)
  );

  return app;
};

module.exports = conf => {
  return pipe(addForum, addClient)(express());
};
