import isFunction from 'lodash.isfunction';
import partial from 'lodash.partial';
import defaultsDeep from 'lodash.defaultsdeep';
import omit from 'lodash.omit';
import h from 'virtual-dom/h';
import isVirtualNode from 'virtual-dom/vnode/is-vnode';

const _h = (tag, props, ...children) => {
  const vTree = h(
    isFunction(tag) ? 'div' : tag,
    omit(props, 'children'),
    props && props.children || children
  );
  if (isFunction(tag)) vTree.tagName = tag;
  return vTree;
};

const map = (fun, children) => (children || []).map(fun);

const clone = (child, properties, children) => {
  return _h(
    child.tagName,
    defaultsDeep({}, child.properties, properties),
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
  return clone(vTree, {}, map(partial(walker, fun), vTree.children));
};

export default {
  h: _h,
  map: map,
  clone: clone,
  resolve: resolve,
  walker: walker
};
