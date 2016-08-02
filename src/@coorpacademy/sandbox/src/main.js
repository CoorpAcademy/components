import get from 'lodash/fp/get';
import * as treant from '../../../@treantjs/core';
import * as VirtualDom from '../../../@treantjs/engine-virtual-dom';
import * as React from '../../../@treantjs/engine-react';
import * as SnabbDom from '../../../@treantjs/engine-snabbdom';
import createApp from './app';

const {h} = treant;

const engines = {
  VirtualDom,
  React,
  SnabbDom
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
