import angular from 'angular';

import vdomDirective from './directive/virtual-dom';

const app = angular.module('app', []);

vdomDirective(app);

app.controller('main', $scope => {
  $scope.user = {
    username: 'godu'
  };
});
