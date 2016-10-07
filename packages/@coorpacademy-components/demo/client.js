import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {createHistory, useBasename} from 'history';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import createApp from './app';
import {components, fixtures} from './components';
import skin from './assets/skin.json';

let _createApp = createApp;
let _components = components;
let _fixtures = fixtures;

const history = useBasename(createHistory)({
  basename: `/${window.engine}`
});

const options = {
  history,
  skin
};

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const engine = get(window.engine, engines);
const update = pipe(
  engine.transform,
  engine.render(document.getElementById('app'))
);

let App = _createApp(treant, options);
update(App({
  components: _components,
  fixtures: _fixtures,
  location: history.getCurrentLocation()
}));

history.listen(location => {
  update(App({
    components: _components,
    fixtures: _fixtures,
    location
  }));
});

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const _createApp = require('./app').default;
    App = _createApp(treant, options);
    update(App({
      components: _components,
      fixtures: _fixtures,
      location: history.getCurrentLocation()
    }));
  });
  module.hot.accept('./components.js', () => {
    _components = require('./components').components;
    _fixtures = require('./components').fixtures;
    update(App({
      components: _components,
      fixtures: _fixtures,
      location: history.getCurrentLocation()
    }));
  });
}
