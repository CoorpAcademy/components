import partial from 'lodash.partial';
import mapValues from 'lodash.mapvalues';
import * as components from './';

export default (renderer) => {
  const useRenderer = (component) => partial(component, renderer);
  const bundle = mapValues(components, useRenderer);

  const { angularLink } = renderer;

  return {
    ...bundle,
    angularLink
  };
}
