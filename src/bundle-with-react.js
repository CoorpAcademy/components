import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';

import { createElement } from 'react';
import * as components from './';

export const {
  createSlide,
  createTitle
} = mapValues(components, (component) => partial(component, createElement));
