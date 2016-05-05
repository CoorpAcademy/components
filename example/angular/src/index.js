import angular from 'angular';

import reactDirective from './directive/react';
import vdomDirective from './directive/virtual-dom';

const app = angular.module('app', []);

reactDirective(app);
vdomDirective(app);

app.controller('main', $scope => {
  $scope.user = {
    username: 'godu'
  };
});
