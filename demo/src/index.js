import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import App from './App';

let state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

const render = (state) => App(state);

let tree = render(state);               // We need an initial tree
let rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document

setInterval(() => {
  const newTree = render(state);
  const patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}, 1000);
