import test from 'ava';
import isArray from 'lodash/fp/isArray';
import isFunction from 'lodash/fp/isFunction';
import toHelpers from '..';

test('toHelpers should transform factories as helpers', t => {
  const factories = {
    createStarRating: (_treant, options) => (props, children) => true,
    createCatalogCard: (_treant, options) => (props, children) => true
  };

  const helpers = toHelpers(factories);

  t.true(isArray(helpers));
  t.true(helpers.length === 2);
  t.true(isFunction(helpers[0]));
  t.true(isFunction(helpers[1]));
});
