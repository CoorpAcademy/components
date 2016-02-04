import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';
import isFunction from 'lodash.isfunction';

import h from 'virtual-dom/h';
import * as components from './';

export const _h = (tag, props, ...children) => {
  if (isFunction(tag)) return tag({
    ...props,
    children
  });
  return h(tag, props, children);
}

export const {
  createSlide,
  createTitle
} = mapValues(components, (component) => partial(component, _h));
