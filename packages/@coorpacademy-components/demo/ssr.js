import get from 'lodash/fp/get';
import join from 'lodash/fp/join';
import map from 'lodash/fp/map';
import includes from 'lodash/fp/includes';
import {createMemoryHistory, useBasename} from 'history';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import createApp from './app';
import {components, fixtures} from './components';

let App = createApp(treant);
let _components = components;
let _fixtures = fixtures;

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const styles = [
  '//fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&amp;ver=4.5.2', // eslint-disable-line max-len
  '//fonts.googleapis.com/css?family=Open+Sans&amp;ver=4.5.2',
  '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css'
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
    components: _components,
    fixtures: _fixtures
  });

  const html = engine.renderToString(vTree);

  res.send(`
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    ${join('', map(font => `<link rel="stylesheet" href="${font}"/>`, styles))}
    <div id="app">${html}</div>
    <script>window.engine = '${req.params.engine}'</script>
    <script async type="text/javascript" src="/dist/components.js"></script>
  `);
};

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const _createApp = require('./app').default;
    App = _createApp(treant);
  });
  module.hot.accept('./components.js', () => {
    _components = require('./components').components;
    _fixtures = require('./components').fixtures;
  });
}
