import curry from 'lodash/fp/curry';
import clone from './clone';
import isVNode from './is-vnode';
import map from './map';

const walker = curry((fun, vNode) => {
  const resolvedVNode = isVNode(vNode) ? fun(vNode) : vNode;
  if (!resolvedVNode.children) return resolvedVNode;
  return clone(resolvedVNode, null, map(walker(fun), resolvedVNode.children));
});

export default walker;
