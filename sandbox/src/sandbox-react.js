import engine from '../../src/engine/react';
const update = engine.render(document.getElementById('app'));

import createApp from './app';
const App = createApp(engine);
const tree = App();
update(tree);

if(module.hot) {
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    const App = createApp(engine);
    const tree = App();
    update(tree);
  });
}
