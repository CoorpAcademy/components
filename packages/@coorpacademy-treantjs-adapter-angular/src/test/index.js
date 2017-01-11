import test from 'ava';
import React from 'react';
import isArray from 'lodash/fp/isArray';
import contains from 'lodash/fp/contains';
import createDirectives from '..';

test('createDirectives should wrap factories as directive factories', t => {
  const factories = {
    StarRating: props => true,
    CatalogCard: props => true
  };

  const app = {
    directives: [],
    directive: (_name, options) => app.directives.push(_name)
  };

  const Provider = (
    <div />
  );

  createDirectives(app, Provider, factories);

  t.true(isArray(app.directives));
  t.true(contains('coorpStarRating', app.directives));
  t.true(contains('coorpCatalogCard', app.directives));
});
