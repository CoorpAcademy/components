import isString from 'lodash/fp/isString';
import mapKeys from 'lodash/fp/mapKeys';

import {map, resolve} from '@coorpacademy/treantjs-core';

import h from 'virtual-dom/h';
import createElement from 'virtual-dom/create-element';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import toHtml from 'vdom-to-html';

const event = /^on[A-Z].+/;

const transformProps = props => mapKeys(key => {
  if (event.test(key)) return key.toLowerCase();
  return key;
}, props);

const transform = vNode => {
  if (isString(vNode)) return vNode;
  const {tagName, properties, children} = resolve(vNode);
  return h(
    tagName,
    transformProps(properties),
    map(transform, children)
  );
};

const render = el => {
  let rootNode = el.firstChild;
  let currentTree = el.firstChild;
  return vTree => {
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

const renderToString = toHtml;

export {
  h,
  transformProps,
  transform,
  render,
  renderToString
};
