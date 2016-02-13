import isFunction from 'lodash.isfunction';
import isString from 'lodash.isstring';
import partial from 'lodash.partial';
import defaultsDeep from 'lodash.defaultsdeep';
import h from 'virtual-dom/h';

const _h = (tag, props, ...children) => {
  const vTree = h(tag, props, children);
  if (isFunction(tag)) vTree.tagName = tag;
  return vTree;
};

const map = (arr, fun) => arr.map(fun);

const clone = (child, properties, children) => {
  if (isString(child)) return child;
  return defaultsDeep({
    properties,
    children: children || child.children
  }, child);
};

const resolve = (vTree) => {
  if (isFunction(vTree.tagName)) return resolve(vTree.tagName({
    ...vTree.properties,
    children: vTree.children
  }));
  console.log('resolving', vTree);
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = fun(vTree);
  if (!vTree.children) return vTree;
  return clone(vTree, {}, map(vTree.children, partial(walker, fun)));
};

export default {
  h: _h,
  map: map,
  clone: clone,
  resolve: resolve,
  walker: walker
};
