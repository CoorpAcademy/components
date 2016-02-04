
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import App from './App';
import { _h } from '../../src/bundle-with-virtual-dom';

const skin = {
  primary: '#F0F'
};

const sandbox = App(_h, {skin});

let tree = sandbox();
const rootNode = createElement(tree);
document.getElementById('app').appendChild(rootNode);

if(module.hot) {
  module.hot.accept("../../src/", () => {
    const App = require('./App').default;
    const sandbox = App(_h, {skin});
    const newTree = sandbox();

    const patches = diff(tree, newTree);
    patch(rootNode, patches);
    tree = newTree;
  });
}
