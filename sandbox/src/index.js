
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import App from './App';

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

let tree = App(state);
const rootNode = createElement(tree);
document.getElementById('app').appendChild(rootNode);

if(module.hot) {
  module.hot.accept("./App.js", () => {
    const App = require('./App').default;
    const newTree = App(state);
    const patches = diff(tree, newTree);
    patch(rootNode, patches);
    tree = newTree;
  });
}
