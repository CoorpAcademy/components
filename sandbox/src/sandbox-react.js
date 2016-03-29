import engine from '../../src/engine/react';
const update = engine.render(document.getElementById('app'));

import createApp from './app';
let App = createApp(engine);

if (module.hot)
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    App = createApp(engine);
    update(App());
  });


update(App());
setInterval(() => update(App()), 1000);
