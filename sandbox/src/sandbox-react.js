import { render } from 'react-dom';
import reactRenderer from '../../src/renderer/react';

import createApp from './App';
const App = createApp(reactRenderer);
render(App(), document.getElementById('app'));

if(module.hot) {
  module.hot.accept('./App.js', () => {
    const createApp = require('./App').default;
    const App = createApp(reactRenderer);
    render(App(), document.getElementById('app'));
  });
}
