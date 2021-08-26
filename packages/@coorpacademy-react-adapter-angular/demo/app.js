import angular from 'angular';
import {createElement, createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import createDirectives from '../src';

const BackgroundColorContext = createContext('blue');

const DisplayValue = ({children}) => {
  const backgroundColor = useContext(BackgroundColorContext);

  return createElement(
    'span',
    {
      style: {
        backgroundColor
      }
    },
    children
  );
};

DisplayValue.propTypes = {
  children: PropTypes.string
};

const app = angular.module('app', []);
app.value('config', {}).value('$i18next', () => {});

createDirectives(app, BackgroundColorContext.Provider, {
  DisplayValue
});

app.controller('main', [
  '$scope',
  '$interval',
  ($scope, $interval) => {
    $scope.props = {
      children: '@treantjs'
    };

    $scope.context = {
      value: 'blue'
    };

    $interval(() => {
      $scope.context.value = $scope.context.value === 'blue' ? 'red' : 'blue';
    }, 1000);

    $interval(() => {
      $scope.$broadcast('$destroy');
    }, 2000);
   
  }
]);
