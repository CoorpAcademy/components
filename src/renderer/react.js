import isFunction from 'lodash.isfunction';
import partial from 'lodash.partial';
import React, { createElement, cloneElement } from 'react';

const clone = (child, properties, children) => {
  return cloneElement(child, {
    ...properties,
    style: {
      ...(child.props && child.props.style),
      ...properties.style
    }
  }, children || child.props && child.props.children);
};

const map = (children, fun) => {
  return React.Children.map(children, fun);
};

const resolve = (vTree) => {
  if (isFunction(vTree.type)) return resolve(vTree.type(vTree.props));
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = fun(vTree);
  if (!vTree.props || !vTree.props.children) return vTree;
  return clone(vTree, {}, map(vTree.props.children, partial(walker, fun)));
};

export default {
  h: createElement,
  map: map,
  clone: clone,
  resolve: resolve,
  walker: walker
};
