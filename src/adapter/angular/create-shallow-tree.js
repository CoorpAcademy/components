'use strict';

const createShallowTree = (component, scope, attrs, children) => {
  const translate = window.i18n;
  const props = {
    ...attrs,
    children,
    translate
  };

  props.onClick = function() {
    scope.$apply(scope.onClick).apply(null, arguments);
  };

  return component(props);
};

export default createShallowTree;
