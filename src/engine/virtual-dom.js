import isFunction from 'lodash/fp/isFunction';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import mapKeys from 'lodash/fp/mapKeys';
import omit from 'lodash/fp/omit';
import flatten from 'lodash/fp/flatten';
import assign from 'lodash/fp/assign';
import compact from 'lodash/fp/compact';
import partial from 'lodash/fp/partial';
import _h from 'virtual-dom/h';
import isVirtualNode from 'virtual-dom/vnode/is-vnode';
import createElement from 'virtual-dom/create-element';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

const event = /^on[A-Z].+/;
const transformProps = (props) => mapKeys(key => {
  if(event.test(key)) return key.toLowerCase();
  return key;
}, props);

const omitChildren = omit(['children']);

const h = (tag, props, ...children) => {
  const _tag = isFunction(tag) ? 'div' : tag;
  const _props = omitChildren(isFunction(tag) ? props : transformProps(props));
  const _children = compact(flatten(props && props.children || children || []));

  const vTree = _h(
    _tag,
    _props,
    _children
  );
  if (isFunction(tag)) vTree.tagName = tag;

  return vTree;
};

const map = (fun, children) => (children || []).map(fun);

const clone = (child, properties, children) => {
  return h(
    child.tagName,
    defaultsDeep(child.properties, properties),
    children || child.children
  );
};

const resolve = (vTree) => {
  if (isFunction(vTree.tagName)) return resolve(vTree.tagName({
    ...vTree.properties,
    children: vTree.children
  }));
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

    if(!rootNode) {
      rootNode = createElement(vTree, {
        document: global.document
      });
      el.appendChild(rootNode);
      currentTree = vTree;
      return;
    }

    const patches = diff(currentTree, vTree);
    patch(rootNode, patches);
    currentTree = vTree;
  };
};

const createWidget = (widgetOptions, options) => {
  widgetOptions = assign({
    tagName: 'div',
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    update: () => {},
    destroy: () => {}
  }, widgetOptions);

  const Widget = function(props) {
    this.props = props;
  };

  Widget.prototype.type = 'Widget';

  Widget.prototype.init = function() {
    const el = document.createElementNS(widgetOptions.namespaceURI, widgetOptions.tagName);
    setTimeout(() => this.update(null, el), 0);
    return el;
  };

  Widget.prototype.update = function(prev, el) {
    return widgetOptions.update(this.props, prev, el);
  };

  Widget.prototype.destroy = function(el) {
    return widgetOptions.destroy(el);
  };

  return (props) => {
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
  createWidget
};
