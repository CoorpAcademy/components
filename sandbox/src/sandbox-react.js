import { render } from 'react-dom';
import renderer from '../../src/renderer/react';

import createApp from './app';
const App = createApp(renderer);
const tree = App();
render(tree, document.getElementById('app'));

if(module.hot) {
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    const App = createApp(renderer);
    render(App(), document.getElementById('app'));
  });
}
