import entries from 'lodash/fp/entries';
import forEach from 'lodash/fp/forEach';
import spread from 'lodash/fp/spread';
import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import createDirectives from '../src';

const Title = ({children} = {}) => React.createElement(
  'h1',
  {},
  children
);

const app = angular.module('app', []);

app
  .value('config', {})
  .value('$i18next', () => {});

createDirectives(app, null, {
  Title
});

app.controller('main', $scope => {
  $scope.props = {
    children: '@treantjs'
  };
});
