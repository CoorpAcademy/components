import mapValues from 'lodash/fp/mapValues';
import * as components from './';

export default (engine) => {
  const useEngine = (component) => (...args) => component(engine, ...args);
  const bundle = mapValues(components, useEngine);
  return {...bundle};
};
