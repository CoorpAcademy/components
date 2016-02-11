import isFunction from 'lodash.isfunction';
import isString from 'lodash.isstring';
import partial from 'lodash.partial';
import React, { createElement, cloneElement } from 'react';

const clone = (child, properties, children) => {
  if (isString(child)) return child;
  const vTree = isFunction(child.type) ? child.type(child.props) : child;
  return cloneElement(vTree, {
    ...properties,
    style: {
      ...(vTree.props && vTree.props.style),
      ...properties.style
    }
  }, children || vTree.props &&  vTree.props.children);
};;

const map = (children, fun) => {
  return React.Children.map(children, fun);
};

const resolve = (vTree) => {
  if (isFunction(vTree.tagName)) return resolve(vTree.tagName(vTree.props));
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
