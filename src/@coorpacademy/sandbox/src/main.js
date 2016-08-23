import get from 'lodash/fp/get';
import {createStore} from 'redux';
import {createHistory, useBasename} from 'history';

import * as treant from '../../../@treantjs/core';
import * as Virtualdom from '../../../@treantjs/engine-virtual-dom';
import * as React from '../../../@treantjs/engine-react';
import * as Snabbdom from '../../../@treantjs/engine-snabbdom';
import createApp from './app';
import {createReducer} from './reducers';
import {createMiddlewares} from './middlewares';
import {navigate, connectHistory} from '../../redux-tools/redux-history';

const history = useBasename(createHistory)({
  basename: `/${window.engine}`
});

const store = createStore(
  createReducer(),
  createMiddlewares()
);
connectHistory(history, store);

store.dispatch(navigate(history.getCurrentLocation()));

const {h} = treant;
const options = {
  dispatch: store.dispatch,
  history
};

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const engine = get(window.engine, engines);
const update = engine.render(document.getElementById('app'));

const App = createApp(treant, options);

update(App(store.getState()));

store.subscribe(() => {
  update(App(store.getState()));
});

const props = {
  status: 'closed'
};

props.onClose = () => {
  props.status = 'closed';
  update(App(props));
};

props.onOpen = () => {
  props.status = 'open';
  update(App(props));
};

if (module.hot)
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    const App = createApp(treant, options);
    update(App(store.getState()));
  });
