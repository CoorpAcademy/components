import mapKeys from 'lodash/fp/mapKeys';

const linkWithEngine = engine => ($i18next, $rootScope, scope, element, createComponent) => {
  const update = engine.render(element[0]);

  const refresh = props => {
    const options = {
      skin: $rootScope.skin,
      translate: $i18next
    };

    const component = createComponent(engine, options);
    const vTree = component(props);
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

const createDirective = (app, engine, componentName, createComponent) => {
  const directive = ($rootScope, $i18next) => {
    const link = (scope, element, attrs) => {
      linkWithEngine(engine)($i18next, $rootScope, scope, element, createComponent);
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
const createDirectives = (app, engine, components) => {
  const toDirective = key => {
    const isFactory = key.split('create')[1];
    if (!isFactory) return;

    const componentName = lowerFirstLetter(isFactory);
    const createComponent = components[key];
    createDirective(app, engine, componentName, createComponent);
  };

  mapKeys(toDirective, components);
};

export default createDirectives;
