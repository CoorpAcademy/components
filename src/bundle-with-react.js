import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';

import reactOptions from './util/react';
import * as components from './';

export const {
  createSlide,
  createTitle
} = mapValues(components, (component) => partial(component, reactOptions));
