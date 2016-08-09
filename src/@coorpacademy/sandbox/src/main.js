import get from 'lodash/fp/get';
import * as treant from '../../../@treantjs/core';
import * as Virtualdom from '../../../@treantjs/engine-virtual-dom';
import * as React from '../../../@treantjs/engine-react';
import * as Snabbdom from '../../../@treantjs/engine-snabbdom';
import createApp from './app';

const {h} = treant;

const engines = {
  Virtualdom,
  React,
  Snabbdom
};
const engine = get(window.engine, engines);
const update = engine.render(document.getElementById('app'));

let App = createApp(treant);

if (module.hot)
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    App = createApp(treant);
    update(App());
  });

update(App());
