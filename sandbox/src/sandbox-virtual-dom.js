import defaultsDeep from 'lodash.defaultsdeep';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import h from 'virtual-dom/h';
import createElement from 'virtual-dom/create-element';
import isFunction from 'lodash.isfunction';

const _h = (tag, props, ...children) => {
  if (isFunction(tag)) return tag({
    ...props,
    children
  });
  return h(tag, props, children);
}

const options = {
  map: (arr, fun) => arr.map(fun),
  clone: (child, properties) => defaultsDeep({ properties }, child)
};

import createApp from './App';
const App = createApp(_h, options);
let tree = App();

const rootNode = createElement(tree);
document.getElementById('app').appendChild(rootNode);

if(module.hot) {
  module.hot.accept('./App.js', () => {
    const createApp = require('./App').default;
    const App = createApp(_h, options);
    const newTree = App();

    const patches = diff(tree, newTree);
    patch(rootNode, patches);
    tree = newTree;
  });
}
