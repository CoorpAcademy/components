import assign from 'lodash/fp/assign';
import isString from 'lodash/fp/isString';
import mapKeys from 'lodash/fp/mapKeys';

import walker from '../../@treantjs/core/walker';
import resolve from '../../@treantjs/core/resolve';
import map from '../../@treantjs/core/map';
import isWidget from '../../@treantjs/core/is-widget';

import h from 'virtual-dom/h';
import createElement from 'virtual-dom/create-element';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

const resolver = walker(resolve);

const event = /^on[A-Z].+/;

const transformProps = props => mapKeys(key => {
  if (event.test(key)) return key.toLowerCase();
  return key;
}, props);

const transform = vNode => {
  if (isString(vNode)) return vNode;
  vNode = resolver(vNode);
  if (isWidget(vNode)) return createWidget(vNode);
  return h(
    vNode.tagName,
    transformProps(vNode.properties),
    map(transform, vNode.children)
  );
};

const createWidget = widget => {
  function Widget() {
    this.props = widget.properties;
    this.name = 'Widget';
    this.id = widget.id;
  }

  Widget.prototype.type = 'Widget';

  Widget.prototype.init = function() {
    const el = document.createElementNS(widget.namespaceURI, widget.tagName);
    widget.init(this.props, el);
    return el;
  };

  Widget.prototype.update = function(prev, el) {
    return widget.update(this.props, prev.props, el);
  };

  Widget.prototype.destroy = function(el) {
    return widget.destroy(el);
  };

  return new Widget();
};

const render = el => {
  let rootNode;
  let currentTree;
  return vTree => {
    vTree = transform(vTree);
    if (!rootNode) {
      rootNode = createElement(vTree, {
        document: global.document
      });
      el.appendChild(rootNode);
      currentTree = vTree;
      return rootNode;
    }

    const patches = diff(currentTree, vTree);
    rootNode = patch(rootNode, patches);
    currentTree = vTree;
    return rootNode;
  };
};

export {
  transform,
  render
};
