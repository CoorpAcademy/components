import isFunction from 'lodash/fp/isFunction';
import isArray from 'lodash/fp/isArray';
import isString from 'lodash/fp/isString';
import _map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import flatten from 'lodash/fp/flatten';
import assign from 'lodash/fp/assign';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import partial from 'lodash/fp/partial';
import React, { createElement, createClass } from 'react';
import { render as _render, findDOMNode } from 'react-dom';

const omitChildren = omit(['children']);

const h = (tag, props, children) => {
  if (!isArray(children)) children = [];
  const _children = flatten(children);

  if (process.env.NODE_ENV !== 'production' && isFunction(tag) && tag.validate) {
    tag.validate(props, _children);
  }

  return createElement(
    tag,
    props || null,
    ..._children
  );
};

const clone = (child, properties, children) => {
  return h(
    child.type,
    defaultsDeep(child.props, properties),
    children || child.props.children && map(c => c, child.props.children) || []
  );
};

const map = (fun, children) => {
  return _map(fun)(React.Children.toArray(children));
};

const resolve = vTree => {
  if (isFunction(vTree.type) && vTree.type.resolve !== false)
    return resolve(
      vTree.type(
        omitChildren(vTree.props),
        vTree.props.children
      )
    );
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = isString(vTree) ? vTree : fun(vTree);
  if (!vTree.props || !vTree.props.children) return vTree;
  return clone(vTree, null, map(partial(walker, [fun]), vTree.props.children));
};

const render = el => {
  return vTree => {
    _render(walker(resolve, vTree), el);
    return el.firstChild;
  };
};

const widget = options => {
  options = assign({
    tagName: 'div',
    init: () => {},
    update: () => {},
    destroy: () => {},
    validate: null
  }, options);

  const _widget = createClass({
    componentDidMount() {
      const el = findDOMNode(this);
      options.init(this.props, el);
    },

    componentDidUpdate(prev) {
      const el = findDOMNode(this);
      options.update(this.props, prev, el);
    },

    componentWillUnmount() {
      const el = findDOMNode(this);
      options.destroy(el);
    },

    render() {
      return h(options.tagName);
    }
  });
  _widget.resolve = false;
  _widget.validate = options.validate;
  return _widget;
};

export default {
  h,
  map,
  clone,
  resolve,
  walker,
  render,
  widget
};
