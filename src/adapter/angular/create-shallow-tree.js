'use strict';

const createShallowTree = (component, scope, attrs, children) => {
  const props = {
    ...attrs,
    children
  };

  props.onClick = function() {
    scope.$apply(scope.onClick).apply(null, arguments);
  };

  return component(props);
};

export default createShallowTree;
