import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import * as treant from '../core';
import {renderToString} from '../engine-virtual-dom';
import paramCase from 'param-case';

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
