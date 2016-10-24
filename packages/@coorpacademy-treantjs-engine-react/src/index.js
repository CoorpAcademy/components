import isString from 'lodash/fp/isString';
import identity from 'lodash/fp/identity';

import {map, resolve} from '@coorpacademy/treantjs-core';

import {createElement} from 'react';
import {render as _render} from 'react-dom';
import {renderToStaticMarkup} from 'react-dom/server';

const h = (tagName, properties, children) =>
  createElement(tagName, properties, ...children);

const transformProps = identity;

const transform = vNode => {
  if (isString(vNode)) return vNode;
  const {tagName, properties, children} = resolve(vNode);
  return h(
    tagName,
    properties,
    map(transform, children)
  );
};

const render = el => {
  return vTree => {
    _render(vTree, el);
    return el.firstChild;
  };
};

const renderToString = renderToStaticMarkup;

export {
  h,
  transformProps,
  transform,
  render,
  renderToString
};
