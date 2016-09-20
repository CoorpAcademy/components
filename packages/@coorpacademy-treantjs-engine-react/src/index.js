import isString from 'lodash/fp/isString';
import pipe from 'lodash/fp/pipe';

import {map, resolve, walker} from '@coorpacademy/treantjs-core';

import {createElement} from 'react';
import {render as _render} from 'react-dom';
import {renderToStaticMarkup} from 'react-dom/server';

const resolver = walker(resolve);

const transform = vNode => {
  if (isString(vNode)) return vNode;
  vNode = resolver(vNode);
  return createElement(vNode.tagName, vNode.properties, ...map(transform, vNode.children));
};

const render = el => {
  return vTree => {
    vTree = transform(vTree);
    _render(walker(resolve, vTree), el);
    return el.firstChild;
  };
};

const renderToString = pipe(
  transform,
  walker(resolve),
  renderToStaticMarkup
);

export {
  transform,
  render,
  renderToString
};
