import mapKeys from 'lodash/fp/mapKeys';

const linkWithEngine = (treant, engine) => ($i18next, $rootScope, scope, element, createComponent) => {
  const update = engine.render(element[0]);

  const refresh = props => {
    if (props === undefined)
      return;

    const options = {
      skin: $rootScope.skin,
      translate: $i18next
    };

    const component = createComponent(treant, options);
    const vTree = component(props);
    update(vTree);
  };

  $rootScope.$on('i18nLanguageChange', () => refresh(scope.props));

  $rootScope.$watch('skin', () => refresh(scope.props, $rootScope.skin), true);
  scope.$watch('props', () => refresh(scope.props, $rootScope.skin), true);

  scope.$on('$destroy', () => window.angular.element(element).remove());
};

const createDirective = (app, treant, engine, componentName, createComponent) => {
  const directive = ($rootScope, $i18next) => {
    const link = (scope, element, attrs) => {
      linkWithEngine(treant, engine)($i18next, $rootScope, scope, element, createComponent);
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
const createDirectives = (app, treant, engine, components) => {
  const toDirective = key => {
    const isFactory = key.split('create')[1];
    if (!isFactory) return;

    const componentName = `coorp${isFactory}`;
    const createComponent = components[key];
    createDirective(app, treant, engine, componentName, createComponent);
  };

  return mapKeys(toDirective, components);
};

export default createDirectives;
