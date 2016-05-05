/* eslint-disable no-console */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/react', function(req, res) {
  res.sendFile(path.join(__dirname, 'react.html'));
});

app.get('/virtual-dom', function(req, res) {
  res.sendFile(path.join(__dirname, 'virtual-dom.html'));
});

app.get('*', function(req, res) {
  res.send([
    '<ul>',
    '  <li><a href="/react">react</a></li>',
    '  <li><a href="/virtual-dom">virtual-dom</a></li>',
    '</ul>'
  ].join(''));
});

app.listen(3003, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3003');
});
