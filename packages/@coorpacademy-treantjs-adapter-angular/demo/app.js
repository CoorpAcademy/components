import isEqual from 'lodash/fp/isEqual';
import angular from 'angular';
import React from 'react';
import PropTypes from 'prop-types';
import createDirectives from '../src';

const DisplayValue = ({children} = {}, {backgroundColor}) =>
  React.createElement(
    'span',
    {
      style: {
        backgroundColor
      }
    },
    children
  );

DisplayValue.contextTypes = {
  backgroundColor: PropTypes.string
};

class BackgroundColorProvider extends React.Component {
  constructor(props, context) {
    const {backgroundColor} = props;
    super(props, context);
    this.state = {backgroundColor};
  }

  getChildContext() {
    return this.state;
  }

  componentWillReceiveProps(nextProps) {
    const {backgroundColor} = nextProps;
    this.setState({
      backgroundColor
    });
  }

  shouldComponentUpdate(props, context) {
    return !isEqual(props, this.props) || !isEqual(context, this.context);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

BackgroundColorProvider.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.element.isRequired
};

BackgroundColorProvider.childContextTypes = {
  backgroundColor: PropTypes.string
};

const app = angular.module('app', []);

app.value('config', {}).value('$i18next', () => {});

createDirectives(app, BackgroundColorProvider, {
  DisplayValue
});

app.controller('main', ($scope, $interval) => {
  $scope.props = {
    children: '@treantjs'
  };

  $scope.context = {
    backgroundColor: 'blue'
  };
  $interval(() => {
    $scope.context.backgroundColor = $scope.context.backgroundColor === 'blue' ? 'red' : 'blue';
  }, 1000);
});
