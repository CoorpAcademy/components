import h from 'virtual-dom/h';
import isFunction from 'lodash.isfunction';

export default function(tag, props, ...children) {
  if (isFunction(tag)) return tag(props, children);
  return h(tag, props, children);
}
