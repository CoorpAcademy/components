import mapKeys from 'lodash/fp/mapKeys';
import React from 'react';
import ReactDOM from 'react-dom';

const _link = ($rootScope, $i18next, scope, element, Provider, Component) => {
  const update = vTree => {
    ReactDOM.render(vTree, element[0]);
  };

  const refresh = props => {
    if (props === undefined)
      return;

    const options = {
      skin: $rootScope.skin,
      translate: $i18next
    };

    const vTree = (
      <Provider {...options}>
        <Component {...props} />
      </Provider>
    );

    update(vTree);
  };

  $rootScope.$on('i18nLanguageChange', () => refresh(scope.props));

  $rootScope.$watch('skin', () => refresh(scope.props, $rootScope.skin), true);
  scope.$watch('props', () => refresh(scope.props, $rootScope.skin), true);

  scope.$on('$destroy', () => window.angular.element(element).remove());
};

const createDirective = (app, componentName, Provider, Component) => {
  const directive = ($rootScope, $i18next) => {
    const link = (scope, element, attrs) => {
      _link($rootScope, $i18next, scope, element, Provider, Component);
    };

    return {
      restrict: 'E',
      link,
      scope: {
        props: '='
      }
    };
  };

  app.directive(componentName, [
    '$rootScope',
    '$i18next',
    directive
  ]);
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
    createDirective(app, componentName, Provider, Component);
  };

  return mapKeys(toDirective, components);
};

export default createDirectives;
