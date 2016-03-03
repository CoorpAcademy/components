import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';

import renderer from './renderer/virtual-dom';

import * as components from './';

export const {
  createSlide,
  createTitle
} = mapValues(components, (component) => partial(component, renderer));
