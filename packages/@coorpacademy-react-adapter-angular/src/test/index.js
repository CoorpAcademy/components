/* global angular */
import test from 'ava';
import {createElement} from 'react';
import setupBrower from 'browser-env';
import createDirectives from '..';

setupBrower();

require('angular/angular');

global.angular = global.window.angular;

test.beforeEach(t => {
  t.context.app = angular.module('myApp', []);
});

global.window.mocha = {};
global.window.beforeEach = hook =>
  test.beforeEach(t => {
    hook.call(t.context);
  });
global.window.afterEach = hook =>
  test.afterEach(t => {
    hook.call(t.context);
  });
require('angular-mocks');

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

test.serial(
  'should attach directive',
  macro,
  {
    components: {
      Title() {
        return createElement('h1');
      }
    },
    template: '<coorp-title></coorp-title>'
  },
  '<h1></h1>'
);

test.serial(
  'should wrap component with provider element',
  macro,
  {
    components: {
      Title() {
        return createElement('h1');
      }
    },
    provider({children}) {
      return createElement('strong', null, children);
    },
    template: '<coorp-title></coorp-title>'
  },
  '<strong><h1></h1></strong>'
);

test.serial(
  'should pass props',
  macro,
  {
    components: {
      Title({children}) {
        return createElement('h1', null, children);
      }
    },
    template: '<coorp-title props="props"></coorp-title>',
    data: {
      props: {children: 'foo'}
    }
  },
  '<h1>foo</h1>'
);

test.serial(
  'should extract provider props from context',
  macro,
  {
    components: {
      Title: function H1() {
        return createElement('h1');
      }
    },
    provider({tagName}) {
      return createElement(tagName);
    },
    template: '<coorp-title context="context"></coorp-title>',
    data: {
      context: {tagName: 'section'}
    }
  },
  '<section></section>'
);

test.serial(
  'should remove DOM element with unmountComponentAtNode when emiting $destroy',
  (t, {components, template, provider, data}, expected) => {
    createDirectives(t.context.app, provider, components);
    angular.mock.module('myApp');
    angular.mock.inject(($compile, $rootScope) => {
      const scope = $rootScope.$new();
      const element = $compile(template)(scope);
      Object.assign(scope, data);
      scope.$broadcast('$destroy');
      t.is(element.html().replace(' data-reactroot=""', ''), expected);
    });
  },
  {
    components: {
      Title: function H1() {
        return createElement('h1');
      }
    },
    provider({tagName}) {
      return createElement(tagName);
    },
    template: '<coorp-title context="context"></coorp-title>',
    data: {
      context: {tagName: 'section'}
    }
  },
  ''
);
