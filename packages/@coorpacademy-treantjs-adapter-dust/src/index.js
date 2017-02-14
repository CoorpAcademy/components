import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import kebabCase from 'lodash/fp/kebabCase';
import React from 'react';
import {renderToString} from 'react-dom/server';

const toHelpers = (components, Provider) => {
  const toHelper = ([componentName, Component]) => {
    return (dust, options) => {
      dust.helpers[kebabCase(componentName)] = (chunk, context, bodies, props) => {
        let vTree = React.createElement(Component, props);
        if (Provider) {
          const providerOptions = {
            skin: context.get('skin')
          };
          vTree = React.createElement(Provider, providerOptions, vTree);
        }
        const html = renderToString(vTree);
        chunk.write(html);
      };
    };
  };

  return map(toHelper, toPairs(components));
};

export default toHelpers;
