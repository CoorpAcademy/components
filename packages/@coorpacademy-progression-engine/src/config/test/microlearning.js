import test from 'ava';
import {uniqBy} from 'lodash/fp';
import microlearning from '../microlearning';

const {configurations} = microlearning;

test("Configurations shouldn't have conflicting version numbers", t => {
  t.is(configurations.length, uniqBy('version', configurations).length);
});
