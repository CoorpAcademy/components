import isString from 'lodash/fp/isString';
import pipe from 'lodash/fp/pipe';
import {map, resolve, walker} from '@coorpacademy/treantjs-core';
import {createElement} from 'react';
import {render as _render} from 'react-dom';
import {renderToStaticMarkup} from 'react-dom/server';

const resolver = walker(resolve);

const transform = vNode => {
  if (isString(vNode)) return vNode;
  const resolvedVNode = resolver(vNode);
  return createElement(
    resolvedVNode.tagName,
    resolvedVNode.properties,
    ...map(transform, resolvedVNode.children)
  );
};

const render = el => {
  return vTree => {
    const transformedVTree = transform(vTree);
    _render(walker(resolve, transformedVTree), el);
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
