import mapValues from 'lodash/fp/mapValues';
import partial from 'lodash/fp/partial';

export default (engine, components) => {
  const useEngine = (component) => partial(component, [engine]);
  const bundle = mapValues(useEngine, components);
  return bundle;
};
