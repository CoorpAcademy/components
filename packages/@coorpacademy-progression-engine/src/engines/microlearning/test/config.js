import test from 'ava';
import uniqBy from 'lodash/fp/uniqBy';
import config from '../config';

const {configurations} = config;

test("Configurations shouldn't have conflicting version numbers", t => {
  t.is(configurations.length, uniqBy('version', configurations).length);
});
