import get from 'lodash/fp/get';
import {createHistory, useBasename} from 'history';

import * as treant from '../../../@treantjs/core';
import * as Virtualdom from '../../../@treantjs/engine-virtual-dom';
import * as React from '../../../@treantjs/engine-react';
import * as Snabbdom from '../../../@treantjs/engine-snabbdom';

import createApp from './app';
import _components from './components.client';
let components = _components;

const history = useBasename(createHistory)({
  basename: `/${window.engine}`
});

const options = {
  history
};

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const engine = get(window.engine, engines);
const update = engine.render(document.getElementById('app'));

let App = createApp(treant, options);
update(App({
  components,
  location: history.getCurrentLocation()
}));

history.listen(location => {
  update(App({
    components,
    location
  }));
});

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    App = createApp(treant, options);
    update(App({
      components,
      location: history.getCurrentLocation()
    }));
  });
  module.hot.accept('./components.client.js', () => {
    components = require('./components.client').default;
    update(App({
      components,
      location: history.getCurrentLocation()
    }));
  });
}
