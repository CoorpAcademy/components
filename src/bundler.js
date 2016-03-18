import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';
import * as components from './';

export default (engine) => {
  const useEngine = (component) => partial(component, engine);
  const bundle = mapValues(components, useEngine);
  return {...bundle};
};
