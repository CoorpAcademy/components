import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import paramCase from 'param-case';
import * as treant from '@coorpacademy/treantjs-core';
import {renderToString} from '@coorpacademy/treantjs-engine-virtual-dom';

const toHelpers = factories => {
  const toHelper = ([key, factory]) => {
    const isFactory = key.split('create')[1];
    if (!isFactory) return;

    const componentName = paramCase(isFactory);
    const Component = factory(treant);

    return (dust, options) => {
      dust.helpers[componentName] = (chunk, context, bodies, props) => {
        const vTree = Component(props);
        const html = renderToString(vTree);
        chunk.write(html);
      };
    };
  };

  return map(toHelper, toPairs(factories));
};

export default toHelpers;
