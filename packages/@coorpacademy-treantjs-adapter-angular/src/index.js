import mapKeys from 'lodash/fp/mapKeys';

const linkWithEngine = (React, ReactDOM) => ($i18next, $rootScope, scope, element, Component) => {
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

    const vTree = React.createElement(Component, props);
    update(vTree);
  };

  $rootScope.$on('i18nLanguageChange', () => refresh(scope.props));

  $rootScope.$watch('skin', () => refresh(scope.props, $rootScope.skin), true);
  scope.$watch('props', () => refresh(scope.props, $rootScope.skin), true);

  scope.$on('$destroy', () => window.angular.element(element).remove());
};

const lowerFirstLetter = string => {
  return string[0].toLowerCase() + string.slice(-(string.length - 1));
};

const createDirective = (app, React, ReactDOM, componentName, Component) => {
  const directive = ($rootScope, $i18next) => {
    const link = (scope, element, attrs) => {
      linkWithEngine(React, ReactDOM)($i18next, $rootScope, scope, element, Component);
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
const createDirectives = (app, React, ReactDOM, components) => {
  const toDirective = key => {
    const componentName = lowerFirstLetter(key);
    const Component = components[key];
    createDirective(app, React, ReactDOM, componentName, Component);
  };

  return mapKeys(toDirective, components);
};

export default createDirectives;
