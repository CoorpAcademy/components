import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import kebabCase from 'lodash/fp/kebabCase';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

const DefaultProvider = ({children}) => children;

const toHelpers = (components, Provider = DefaultProvider) => {
  const toHelper = ([componentName, Component]) => {
    return (dust, options) => {
      dust.helpers[kebabCase(componentName)] = (chunk, context, bodies, props) => {
        const providerPropsAttribute = props.context;
        const providerProps = providerPropsAttribute ? context.get(providerPropsAttribute) : {};

        const html = renderToStaticMarkup(
          createElement(Provider, providerProps, createElement(Component, props))
        );

        chunk.write(html);
      };
    };
  };

  return map(toHelper, toPairs(components));
};

export default toHelpers;
