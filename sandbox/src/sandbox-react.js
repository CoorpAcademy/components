import { render } from 'react-dom';

import App from './app-react';

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

render(App(state), document.getElementById('app'));


if(module.hot) {
  module.hot.accept("./app-react.js", () => {
    const App = require('./app-react').default;
    const newTree = App(state);
    render(App(state), document.getElementById('app'));
  });
}
