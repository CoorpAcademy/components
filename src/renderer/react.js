import isFunction from 'lodash.isfunction';
import isString from 'lodash.isstring';
import partial from 'lodash.partial';
import defaultsDeep from 'lodash.defaultsdeep';
import React, { createElement } from 'react';

const clone = (child, properties, children) => {
  return createElement(
    child.type,
    defaultsDeep({}, child.props, properties),
    children || child.props.children
  );
};

const map = (fun, children) => {
  return React.Children.map(children, fun);
};

const resolve = (vTree) => {
  if (isFunction(vTree.type)) return resolve(vTree.type(vTree.props));
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = isString(vTree) ? vTree : fun(vTree);
  if (!vTree.props || !vTree.props.children) return vTree;
  return clone(vTree, {}, map(partial(walker, fun), vTree.props.children));
};

const render = (children) => {
  return map(resolve, children).pop();
}

export default {
  h: createElement,
  map: map,
  clone: clone,
  resolve: resolve,
  walker: walker,
  render: render
};
