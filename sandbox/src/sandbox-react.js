import { render } from 'react-dom';
import renderer from '../../src/renderer/react';

import createApp from './App';
const App = createApp(renderer);
const tree = App();
render(tree, document.getElementById('app'));

if(module.hot) {
  module.hot.accept('./App.js', () => {
    const createApp = require('./App').default;
    const App = createApp(renderer);
    render(App(), document.getElementById('app'));
  });
}
