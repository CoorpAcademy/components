import curry from 'lodash/fp/curry';

import clone from './clone';
import isVNode from './is-vnode';
import map from './map';

const walker = curry((fun, vNode) => {
  vNode = isVNode(vNode) ? fun(vNode) : vNode;
  if (!vNode.children) return vNode;
  return clone(vNode, null, map(walker(fun), vNode.children));
});

export default walker;
