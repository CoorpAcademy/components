import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import kebabCase from 'lodash/fp/kebabCase';
import * as treant from '@coorpacademy/treantjs-core';
import {renderToString} from '@coorpacademy/treantjs-engine-virtual-dom';

const toHelpers = (React, ReactDOMServer, components) => {
  const toHelper = ([componentName, Component]) => {
    return (dust, options) => {
      dust.helpers[componentName] = (chunk, context, bodies, props) => {
        const vTree = React.createElement(Component, props);
        const html = ReactDOMServer.renderToString(vTree);
        chunk.write(html);
      };
    };
  };

  return map(toHelper, toPairs(components));
};

export default toHelpers;
