import isFunction from 'lodash.isfunction';
import React, { createElement, cloneElement } from 'react';

const clone = (child, properties) => {
  const vTree = isFunction(child.type) ? child.type(child.props) : child;
  return cloneElement(vTree, {
    ...properties,
    style: {
      ...vTree.props.style,
      ...properties.style
    }
  });
}

const map = (children, fun) => {
  children = React.Children.only(children);
  return React.Children.map(children, fun);
}

export default {
  h: createElement,
  map: map,
  clone: clone
};
