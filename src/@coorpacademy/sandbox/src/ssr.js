import get from 'lodash/fp/get';
import join from 'lodash/fp/join';
import map from 'lodash/fp/map';
import includes from 'lodash/fp/includes';
import {createMemoryHistory, useBasename} from 'history';

import * as treant from '../../../@treantjs/core';
import * as Virtualdom from '../../../@treantjs/engine-virtual-dom';
import * as React from '../../../@treantjs/engine-react';
import * as Snabbdom from '../../../@treantjs/engine-snabbdom';

import _components from './components.server';
import createApp from './app';
let App = createApp(treant);
let components = _components;

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const styles = [
  '//fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&amp;ver=4.5.2', // eslint-disable-line max-len
  '//fonts.googleapis.com/css?family=Open+Sans&amp;ver=4.5.2'
];

if (process.env.NODE_ENV === 'production')
  styles.push('/dist/styles.css');

export default (req, res, next) => {
  if (!includes(
    req.params.engine,
    ['React', 'Virtualdom', 'Snabbdom']
  )) return next();

  const history = useBasename(createMemoryHistory)({
    basename: `/${req.params.engine}`
  });

  const engine = get(req.params.engine, engines);

  const vTree = App({
    location: history.createLocation(req.url),
    components
  });

  const html = engine.renderToString(vTree);

  res.send(`
    ${join('', map(font => `<link rel="stylesheet" href="${font}"/>`, styles))}
    <div id="app">${html}</div>
    <script>window.engine = '${req.params.engine}'</script>
    <script type="text/javascript" src="/dist/main.js"></script>
  `);
};

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    App = createApp(treant);
  });
  module.hot.accept('./components.client.js', () => {
    components = require('./components.client').default;
  });
}
