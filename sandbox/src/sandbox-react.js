import { render } from 'react-dom';
import reactOptions from '../../src/renderer/react';

import createApp from './App';
const App = createApp(reactOptions);
render(App(), document.getElementById('app'));

if(module.hot) {
  module.hot.accept('./App.js', () => {
    const createApp = require('./App').default;
    const App = createApp(reactOptions);
    render(App(), document.getElementById('app'));
  });
}
