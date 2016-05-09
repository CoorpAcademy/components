import get from 'lodash/fp/get';
import engines from '../../src/engines';
import createApp from './app';

const engine = get(window.engine, engines);

const update = engine.render(document.getElementById('app'));
let App = createApp(engine);

if (module.hot)
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    App = createApp(engine);
    update(App());
  });

update(App());
