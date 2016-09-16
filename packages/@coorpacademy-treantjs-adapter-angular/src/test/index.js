import test from 'ava';
import isArray from 'lodash/fp/isArray';
import contains from 'lodash/fp/contains';
import createStarRating from '@coorpacademy/components/molecule/star-rating';
import createCatalogCard from '@coorpacademy/components/molecule/catalog-card';
import * as treant from '@coorpacademy-treantjs-core';
import * as engine from '.@coorpacademy-treantjs-engine-virtual-dom';
import createDirectives from '..';

test('createDirectives should wrap factories as directive factories', t => {
  const factories = {createStarRating, createCatalogCard};
  const app = {
    directives: [],
    directive: (name, options) => app.directives.push(name)
  };

  createDirectives(app, treant, engine, factories);

  t.true(isArray(app.directives));
  t.true(contains('starRating', app.directives));
  t.true(contains('catalogCard', app.directives));
});
