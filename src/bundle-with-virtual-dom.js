import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';
import virtualDomOptions from './util/virtual-dom';

import * as components from './';

export const {
  createSlide,
  createTitle
} = mapValues(components, (component) => partial(component, virtualDomOptions));
