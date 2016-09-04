import VNode from './vnode';

const hyperscript = (tagName, properties, children) =>
  new VNode(tagName, properties, children);

export default hyperscript;
