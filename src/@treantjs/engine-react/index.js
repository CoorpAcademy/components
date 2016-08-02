import isString from 'lodash/fp/isString';
import mapKeys from 'lodash/fp/mapKeys';

import walker from '../../@treantjs/core/walker';
import resolve from '../../@treantjs/core/resolve';
import map from '../../@treantjs/core/map';

import React, { createElement, createClass } from 'react';
import { render as _render, findDOMNode } from 'react-dom';

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

export {
  transform,
  render
};
