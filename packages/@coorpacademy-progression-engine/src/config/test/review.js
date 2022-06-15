import test from 'ava';
import {uniqBy} from 'lodash/fp';
import review from '../review';

const {configurations} = review;

test("Configurations shouldn't have conflicting version numbers", t => {
  t.is(configurations.length, uniqBy('version', configurations).length);
});
