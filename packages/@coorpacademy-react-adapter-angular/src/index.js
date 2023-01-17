import {mapKeys} from 'lodash/fp';
import React from 'react';
import ReactDOM from 'react-dom/client';

const DefaultProvider = props => props.children;

const link = (Provider, Component) => (scope, element, attrs) => {
  const root = ReactDOM.createRoot(element[0])

  const update = vTree => {
    root.render(vTree);
  };

  const refresh = (context = {}, props = {}) => {
    const vTree = (
      <Provider {...context}>
        <Component {...props} />
      </Provider>
    );

    update(vTree);
  };

  scope.$watch('context', () => refresh(scope.context, scope.props), true);
  scope.$watch('props', () => refresh(scope.context, scope.props), true);

  scope.$on('$destroy', () => root.unmount(element[0]));
};

const createDirective = (app, componentName, Provider, Component) => {
  const directive = () => {
    return {
      restrict: 'E',
      link: link(Provider, Component),
      scope: {
        props: '=',
        context: '='
      }
    };
  };

  app.directive(componentName, [directive]);
};

/**
 * examples :
 * <slide value="slideContent"></slide>
 * <module-bubble value="modData()"></module-bubble>
 */
const createDirectives = (app, Provider, components) => {
  const toDirective = key => {
    const componentName = `coorp${key}`;
    const Component = components[key];
    createDirective(app, componentName, Provider || DefaultProvider, Component);
  };

  return mapKeys(toDirective, components);
};

export default createDirectives;
