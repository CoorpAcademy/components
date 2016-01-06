import { render, unmountComponentAtNode } from 'react-dom';
import { createTitle } from '../../../../src/bundle-with-react';

const Title = createTitle({
  skin: {
    primary: 'pink'
  }
});

export default (app) => app.directive('reactTitle', function() {
  function link(scope, element, attrs) {
    scope.$watch('value', function(value) {
      render(Title({}, attrs.value), element[0]);
    });

    element.on('$destroy', function() {
      unmountComponentAtNode(element[0]);
    });
  }

  return {
    restrict: 'E',
    link: link,
    scope: {
      value: "@"
    }
  };
});
