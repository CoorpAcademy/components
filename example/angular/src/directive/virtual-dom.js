import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

const Title = createTitle({
  skin: {
    primary: 'pink'
  }
});

export default app => app.directive('vdomTitle', function() {
  return {
    compile: function(element) {
      element.empty();

      return function link(scope, element, attrs) {
        var linkedTree = Title({children: [attrs.value]});
        var aNode = createElement(linkedTree);
        element[0].appendChild(aNode);

        function watchAction() {
          var newTree = Title({children: [attrs.value]});
          var changes = diff(linkedTree, newTree);
          aNode = patch(aNode, changes);
          linkedTree = newTree;
        }

        scope.$watch('value', function() {
          watchAction();
        });

        scope.$on('$destroy', function() {
          angular.element(aNode).remove();
        });
      };
    },
    restrict: 'E',
    scope: {
      value: '@'
    }
  };
});
