import test from 'ava';
import isArray from 'lodash/fp/isArray';
import contains from 'lodash/fp/contains';
import * as treant from '@coorpacademy/treantjs-core';
import * as engine from '@coorpacademy/treantjs-engine-virtual-dom';
import createDirectives from '..';

test('createDirectives should wrap factories as directive factories', t => {
  const factories = {
    createStarRating: (_treant, options) => (props, children) => true,
    createCatalogCard: (_treant, options) => (props, children) => true
  };

  const app = {
    directives: [],
    directive: (_name, options) => app.directives.push(_name)
  };

  createDirectives(app, treant, engine, factories);

  t.true(isArray(app.directives));
  t.true(contains('coorp-starRating', app.directives));
  t.true(contains('coorp-catalogCard', app.directives));
});
