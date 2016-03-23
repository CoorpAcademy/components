'use strict';

const createShallowTree = (component, scope, props) => {
  props = scope.$eval(props);

  props.onClick = function() {
    scope.$apply(scope.onClick).apply(null, arguments);
  };

  return component(props);
};

export default createShallowTree;
