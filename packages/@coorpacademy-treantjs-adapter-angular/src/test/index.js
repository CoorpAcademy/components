import test from 'ava';
import isArray from 'lodash/fp/isArray';
import contains from 'lodash/fp/contains';
import * as treant from '@coorpacademy/treantjs-core';
import * as engine from '@coorpacademy/treantjs-engine-virtual-dom';
import createDirectives from '..';

test('createDirectives should wrap factories as directive factories', t => {
  const factories = {
    createStarRating: (treant, options) => (props, children) => true,
    createCatalogCard: (treant, options) => (props, children) => true
  };

  const app = {
    directives: [],
    directive: (name, options) => app.directives.push(name)
  };

  createDirectives(app, treant, engine, factories);

  t.true(isArray(app.directives));
  t.true(contains('starRating', app.directives));
  t.true(contains('catalogCard', app.directives));
});
