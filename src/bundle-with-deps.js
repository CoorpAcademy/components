import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';

import h from './h';
import * as components from './';

export const {
  createSlide
} = mapValues(components, (component) => partial(component, h));
