import test from 'ava';
import isArray from 'lodash/fp/isArray';
import isFunction from 'lodash/fp/isFunction';
import createStarRating from '../../../@coorpacademy/components/molecule/star-rating';
import createCatalogCard from '../../../@coorpacademy/components/molecule/catalog-card';
import toHelpers from '../dust';

test('toHelpers should transform factories as helpers', t => {
  const factories = {createStarRating, createCatalogCard};
  const helpers = toHelpers(factories);
  t.true(isArray(helpers));
  t.true(helpers.length === 2);
  t.true(isFunction(helpers[0]));
  t.true(isFunction(helpers[1]));
});
