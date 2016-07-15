import isString from 'lodash/fp/isString';
import mapKeys from 'lodash/fp/mapKeys';
import get from 'lodash/fp/get';

import walker from '../../@treantjs/core/walker';
import resolve from '../../@treantjs/core/resolve';
import map from '../../@treantjs/core/map';
import isWidget from '../../@treantjs/core/is-widget';

import React, { createElement, createClass } from 'react';
import { render as _render, findDOMNode } from 'react-dom';

const resolver = walker(resolve);

const transform = vNode => {
  if (isString(vNode)) return vNode;
  vNode = resolver(vNode);
  if (isWidget(vNode)) return createWidget(vNode);
  return createElement(vNode.tagName, vNode.properties, ...map(transform, vNode.children));
};

const createWidget = widget => {
  const Widget = get('constructor._treant.react', widget) || createClass({
    componentDidMount() {
      const el = findDOMNode(this);
      widget.init(this.props, el);
    },

    componentDidUpdate(prev) {
      const el = findDOMNode(this);
      widget.update(this.props, prev, el);
    },

    componentWillUnmount() {
      const el = findDOMNode(this);
      widget.destroy(el);
    },

    render() {
      return createElement(widget.tagName);
    }
  });

  widget.constructor._treant = widget.constructor._treant || {};
  widget.constructor._treant.react = Widget;

  return createElement(Widget, widget.properties);
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
