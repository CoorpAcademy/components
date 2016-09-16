import isString from 'lodash/fp/isString';
import mapKeys from 'lodash/fp/mapKeys';
import pipe from 'lodash/fp/pipe';

import walker from '../../@treantjs/core/walker';
import resolve from '../../@treantjs/core/resolve';
import map from '../../@treantjs/core/map';

import h from 'virtual-dom/h';
import createElement from 'virtual-dom/create-element';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import toHtml from 'vdom-to-html';

const resolver = walker(resolve);

const event = /^on[A-Z].+/;

const transformProps = props => mapKeys(key => {
  if (event.test(key)) return key.toLowerCase();
  return key;
}, props);

const transform = vNode => {
  if (isString(vNode)) return vNode;
  vNode = resolver(vNode);
  return h(vNode.tagName, transformProps(vNode.properties), map(transform, vNode.children));
};

const render = el => {
  let rootNode;
  let currentTree;
  return vTree => {
    vTree = transform(vTree);

    if (!rootNode) {
      rootNode = createElement(vTree, {
        document: global.document
      });
      el.appendChild(rootNode);
      currentTree = vTree;
      return rootNode;
    }
    const patches = diff(currentTree, vTree);
    rootNode = patch(rootNode, patches);
    currentTree = vTree;
    return rootNode;
  };
};

const renderToString = pipe(
  transform,
  toHtml
);

export {
  transform,
  render,
  renderToString
};
