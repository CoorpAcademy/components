import angular from 'angular';
import createDirectives from '../../../src/adapter/angular/create-directives';

import react from '../../../src/engine/react';
import snabbdom from '../../../src/engine/snabbdom';
import virtualDom from '../../../src/engine/virtual-dom';

const createTitle = ({h}) => ({value} = {}) => (
  <h1>
    {value}
  </h1>
);

const app = angular.module('app', []);

app
  .value('config', {})
  .value('$i18next', () => {});

createDirectives(app, react, {
  createreactTitle: createTitle
});
createDirectives(app, snabbdom, {
  createsnabbdomTitle: createTitle
});
createDirectives(app, virtualDom, {
  createvdomTitle: createTitle
});

app.controller('main', $scope => {
  $scope.props = {
    value: 'godu'
  };
});
