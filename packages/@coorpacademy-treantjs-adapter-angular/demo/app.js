import entries from 'lodash/fp/entries';
import map from 'lodash/fp/map';
import spread from 'lodash/fp/spread';
import angular from 'angular';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import createDirectives from '../src';

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const createTitle = ({h}) => ({value} = {}) => (
  <h1>
    {value}
  </h1>
);

const app = angular.module('app', []);

app
  .value('config', {})
  .value('$i18next', () => {});

map(spread((name, engine) =>
  createDirectives(app, treant, engine, {
    [`create${name}Title`]: createTitle
  })
), entries(engines));

app.controller('main', $scope => {
  $scope.props = {
    value: '@treantjs'
  };
});
