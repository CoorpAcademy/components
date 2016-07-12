import isFunction from 'lodash/fp/isFunction';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import mapKeys from 'lodash/fp/mapKeys';
import map from 'lodash/fp/map';
import assign from 'lodash/fp/assign';
import partial from 'lodash/fp/partial';
import flatten from 'lodash/fp/flatten';
import _h from 'virtual-dom/h';
import isVirtualNode from 'virtual-dom/vnode/is-vnode';
import createElement from 'virtual-dom/create-element';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

const event = /^on[A-Z].+/;
const transformProps = props => mapKeys(key => {
  if (event.test(key)) return key.toLowerCase();
  return key;
}, props);

const mergeClassNames = (child, properties) => {
  if (!child.properties || !child.properties.className)
    return;

  if (!properties || !properties.className)
    return;

  properties.className = `${child.properties.className} ${properties.className}`;
};

const h = (tag, props, children) => {
  const isComponent = isFunction(tag);
  const _children = flatten(children);

  if (process.env.NODE_ENV !== 'production' && isComponent && tag.validate) {
    tag.validate(props, _children);
  }

  const _tag = isComponent ? 'div' : tag;
  const _props = isComponent ? props : transformProps(props);

  const vTree = _h(
    _tag,
    _props,
    _children
  );

  if (isComponent) {
    vTree.tagName = tag;
  }

  return vTree;
};

const clone = (child, properties, children) => {
  mergeClassNames(child, properties);
  return h(
    child.tagName,
    defaultsDeep(child.properties, properties),
    children || child.children
  );
};

const resolve = vTree => {
  if (isFunction(vTree.tagName)) return resolve(vTree.tagName(
    vTree.properties,
    vTree.children
  ));
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = isVirtualNode(vTree) ? fun(vTree) : vTree;
  if (!vTree.children) return vTree;
  return clone(vTree, null, map(partial(walker, [fun]), vTree.children));
};

const render = el => {
  let rootNode;
  let currentTree;
  return vTree => {
    vTree = walker(resolve, vTree);

    if (!rootNode) {
      rootNode = createElement(vTree, {
        document: global.document
      });
      el.appendChild(rootNode);
      currentTree = vTree;
      return rootNode;
    }

    const patches = diff(currentTree, vTree);
    patch(rootNode, patches);
    currentTree = vTree;
    return rootNode;
  };
};

const widget = options => {
  options = assign({
    tagName: 'div',
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    init: () => {},
    update: () => {},
    destroy: () => {},
    validate: null
  }, options);

  const Widget = function(props) {
    this.props = props;
  };

  Widget.prototype.type = 'Widget';

  Widget.prototype.init = function() {
    const el = document.createElementNS(options.namespaceURI, options.tagName);
    options.init(this.props, el);
    return el;
  };

  Widget.prototype.update = function(prev, el) {
    return options.update(this.props, prev.props, el);
  };

  Widget.prototype.destroy = function(el) {
    return options.destroy(el);
  };

  const component = props => {
    return new Widget(props);
  };

  component.validate = options.validate;
  return component;
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
