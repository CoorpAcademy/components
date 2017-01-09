import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import kebabCase from 'lodash/fp/kebabCase';

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
