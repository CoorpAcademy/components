import test from 'ava';
import uniqBy from 'lodash/fp/uniqBy';
import learner from '../learner';

const {configurations} = learner;

test("Configurations shouldn't have conflicting version numbers", t => {
  t.is(configurations.length, uniqBy('version', configurations).length);
});
