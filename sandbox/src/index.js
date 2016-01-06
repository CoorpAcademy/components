import h from '../../src/h';
import App from './App';
// import App from '../../example/app-using-virtual-dom';
// import App from '../../example/app-no-deps';

var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

// 1: Create a function that declares what the DOM should look like
function render(state)  {
  return <App {...state}/>;
}

// 2: Initialise the document
var state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

var tree = render(state);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document

if(module.hot) {
    module.hot.accept("./App.js", function() {
      var newTree = render(state);
      var patches = diff(tree, newTree);
      rootNode = patch(rootNode, patches);
      tree = newTree;
    });
}
