import isFunction from 'lodash/fp/isFunction';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import mapKeys from 'lodash/fp/mapKeys';
import map from 'lodash/fp/map';
import assign from 'lodash/fp/assign';
import partial from 'lodash/fp/partial';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import reduce from 'lodash/fp/reduce';
import flatten from 'lodash/fp/flatten';
import _h from 'virtual-dom/h';
import isVirtualNode from 'virtual-dom/vnode/is-vnode';
import createElement from 'virtual-dom/create-element';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

const events = /^on([A-Z].+)/;
const datas = /^data-.+/;

const transformProps = props => {
  if (!props) return props;
  const data = pipe(
    keys,
    reduce((data, key) => {
      const value = props[key];

      // Events
      const isEvent = key.match(events);
      if (isEvent)
        return set(key.toLowerCase(), value, data);

      return set(key, value, data);
    }, {})
  )(props);

  return data;
};

const h = (tag, props, children) => {
  const _tag = isFunction(tag) ? 'div' : tag;
  const _props = isFunction(tag) ? props : transformProps(props);

  const vTree = _h(
    _tag,
    _props,
    flatten(children)
  );
  if (isFunction(tag)) vTree.tagName = tag;

  return vTree;
};

const clone = (child, properties, children) => {
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
    destroy: () => {}
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

  return props => {
    return new Widget(props);
  };
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
