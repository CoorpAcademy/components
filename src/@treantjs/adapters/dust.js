import map from 'lodash/fp/map';
import path from 'path';
import * as treant from '../core';
import {renderToString} from '../engine-virtual-dom';
import {extractComponents} from '../../@coorpacademy/components/util/components-finder';

const _require = file => require(path.join('../../@coorpacademy/components', file)).default;
const components = extractComponents('{molecule,organism}', false);

const helpers = map(component => (dust, options) => {
  const createComponent = _require(component.path);
  const Component = createComponent(treant);

  dust.helpers[component.nameParamCase] = (chunk, context, bodies, props) => {
    const vTree = Component(props);
    const html = renderToString(vTree);
    chunk.write(html);
  };
}, components);

module.exports = helpers;
