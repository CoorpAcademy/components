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

import products from '../assets/products';
import contents from '../assets/contents';

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

const props = {
  selected: 0,
  product: products[0],
  title: contents[0].title,
  content: contents[0].levels[0]
};

props.changeLevel = level => {
  props.selected = level;
  props.content = contents[0].levels[level];
  update(App(props));
};

update(App(props));

store.subscribe(() => {
  update(App(store.getState()));
});

if (module.hot)
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    const App = createApp(treant, options);
    update(App(store.getState()));
  });
