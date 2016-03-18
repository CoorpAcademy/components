import isFunction from 'lodash.isfunction';
import isString from 'lodash.isstring';
import partial from 'lodash.partial';
import omit from 'lodash.omit';
import flatten from 'lodash.flatten';
import compact from 'lodash.compact';
import defaultsDeep from 'lodash.defaultsdeep';
import React, { createElement } from 'react';
import { render as _render } from 'react-dom';

const h = (tag, props, ...children) => {
  const _props = omit(props, 'children');
  let _children = compact(flatten(props && props.children || children || []));
  _children = _children.length > 0 ? _children : undefined;

  return createElement(
    tag,
    _props,
    _children
  );
};

const clone = (child, properties, children) => {
  return createElement(
    child.type,
    defaultsDeep({}, properties, child.props),
    children || child.props.children || []
  );
};

const map = (fun, children) => {
  return React.Children.toArray(children).map(fun);
};

const resolve = vTree => {
  if (isFunction(vTree.type)) return resolve(vTree.type(vTree.props));
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = isString(vTree) ? vTree : fun(vTree);
  if (!vTree.props || !vTree.props.children) return vTree;
  return clone(vTree, null, map(partial(walker, fun), vTree.props.children || []));
};

const render = el => {
  return vTree => {
    _render(vTree, el);
  };
};

export default {
  h,
  map,
  clone,
  resolve,
  walker,
  render
};
