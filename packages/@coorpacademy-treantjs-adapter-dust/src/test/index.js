import test from 'ava';
import isArray from 'lodash/fp/isArray';
import isFunction from 'lodash/fp/isFunction';
import toHelpers from '..';

test('toHelpers should transform factories as helpers', t => {
  const components = {
    StarRating: () => true,
    CatalogCard: () => true
  };

  const helpers = toHelpers(components);

  t.true(isArray(helpers));
  t.true(helpers.length === 2);
  t.true(isFunction(helpers[0]));
  t.true(isFunction(helpers[1]));
});
