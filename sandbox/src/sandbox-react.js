import { render } from 'react-dom';
import { createElement } from 'react';

import createApp from './App';
const App = createApp(createElement);
render(App(), document.getElementById('app'));


if(module.hot) {
  module.hot.accept('./App.js', () => {
    const createApp = require('./App').default;
    const App = createApp(createElement);
    render(App(), document.getElementById('app'));
  });
}
