import isFunction from 'lodash.isfunction';
import defaultsDeep from 'lodash.defaultsdeep';
import h from 'virtual-dom/h';

const _h = (tag, props, ...children) => {
  if (isFunction(tag)) return tag({
    ...props,
    children
  });
  return h(tag, props, children);
}

export default {
  h: _h,
  map: (arr, fun) => arr.map(fun),
  clone: (child, properties) => defaultsDeep({ properties }, child)
};
