import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import renderer from '../../src/renderer/virtual-dom';

import createApp from './app';
const App = createApp(renderer);
let tree = renderer.walker(renderer.resolve, App());

const rootNode = createElement(tree);
document.getElementById('app').appendChild(rootNode);

if(module.hot) {
  module.hot.accept('./app.js', () => {
    const createApp = require('./app').default;
    const App = createApp(renderer);
    const newTree = App();

    const patches = diff(tree, newTree);
    patch(rootNode, patches);
    tree = newTree;
  });
}
