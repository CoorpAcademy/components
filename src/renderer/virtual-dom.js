import isFunction from 'lodash.isfunction';
import partial from 'lodash.partial';
import defaultsDeep from 'lodash.defaultsdeep';
import omit from 'lodash.omit';
import flatten from 'lodash.flatten';
import compact from 'lodash.compact';
import _h from 'virtual-dom/h';
import isVirtualNode from 'virtual-dom/vnode/is-vnode';

const h = (tag, props, ...children) => {
  const vTree = _h(
    isFunction(tag) ? 'div' : tag,
    omit(props, 'children'),
    compact(flatten(props && props.children || children || []))
  );
  if (isFunction(tag)) vTree.tagName = tag;
  return vTree;
};

const map = (fun, children) => (children || []).map(fun);

const clone = (child, properties, children) => {
  return h(
    child.tagName,
    defaultsDeep({}, properties, child.properties),
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
  return clone(vTree, null, map(partial(walker, fun), vTree.children));
};

export default {
  h,
  map,
  clone,
  resolve,
  walker
};
