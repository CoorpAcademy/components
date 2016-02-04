
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import * as components from '../../src/bundle-with-virtual-dom';
import App from './App';
const sandbox = App(components);

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

let tree = sandbox(state);
const rootNode = createElement(tree);
document.getElementById('app').appendChild(rootNode);

if(module.hot) {
  module.hot.accept("./App.js", () => {
    console.log('cASDASDASD');
    const App = require('./App').default;
    const c = require('../../src/bundle-with-virtual-dom').default;
    console.log(c);
    const sandbox = App(c);
    const newTree = sandbox(state);

    const patches = diff(tree, newTree);
    patch(rootNode, patches);
    tree = newTree;
  });
}
