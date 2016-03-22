import mapValues from 'lodash/fp/mapValues';
import partial from 'lodash/fp/partial';
import createDirectives from './adapter/angular/create-directives';

export default (engine, components) => {
  const useEngine = (component) => partial(component, [engine]);
  const bundle = mapValues(useEngine, components);

  return {
    components: {
      ...bundle
    },
    engine,
    adapter: {
      createDirectives
    }
  };
};
