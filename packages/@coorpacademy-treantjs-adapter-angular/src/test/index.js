/* global angular */
import test from 'ava';
import {createElement} from 'react';
import setupBrower from 'browser-env';
import createDirectives from '..';

setupBrower();

require('angular/angular');

global.angular = global.window.angular;

global.window.mocha = {};
global.window.beforeEach = test.beforeEach;
global.window.afterEach = test.afterEach;
require('angular-mocks');

test.beforeEach(t => {
  t.context.app = angular.module('myApp', []);
});

const macro = (t, {components, template, provider, data}, expected) => {
  createDirectives(t.context.app, provider, components);
  angular.mock.module('myApp');

  angular.mock.inject(($compile, $rootScope) => {
    const scope = $rootScope.$new();
    const element = $compile(template)(scope);
    Object.assign(scope, data);
    scope.$digest();
    t.is(element.html().replace(' data-reactroot=""', ''), expected);
  });
};

test(
  'should attach directive',
  macro,
  {
    components: {
      Title: () => createElement('h1')
    },
    template: '<coorp-title></coorp-title>'
  },
  '<h1></h1>'
);

test(
  'should wrap component with provider element',
  macro,
  {
    components: {
      Title: () => createElement('h1')
    },
    provider: ({children}) => createElement('strong', null, children),
    template: '<coorp-title></coorp-title>'
  },
  '<strong><h1></h1></strong>'
);

test(
  'should pass props',
  macro,
  {
    components: {
      Title: ({children}) => createElement('h1', null, children)
    },
    template: '<coorp-title props="props"></coorp-title>',
    data: {
      props: {children: 'foo'}
    }
  },
  '<h1>foo</h1>'
);

test(
  'should extract provider props from context',
  macro,
  {
    components: {
      Title: () => createElement('h1')
    },
    provider: ({tagName}) => createElement(tagName),
    template: '<coorp-title context="context"></coorp-title>',
    data: {
      context: {tagName: 'blink'}
    }
  },
  '<blink></blink>'
);
