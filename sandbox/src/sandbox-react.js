import { render } from 'react-dom';
import React, { createElement } from 'react';

const options = {
  map: (children, fun) => React.Children.map(children, fun)[0],
  clone: React.cloneElement
};

import createApp from './App';
const App = createApp(createElement, options);
render(App(), document.getElementById('app'));


if(module.hot) {
  module.hot.accept('./App.js', () => {
    const createApp = require('./App').default;
    const App = createApp(createElement, options);
    render(App(), document.getElementById('app'));
  });
}
