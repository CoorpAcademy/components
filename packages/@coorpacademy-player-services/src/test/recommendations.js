import test from 'ava';
import recommendations from '../fixtures/recommendations';
import {find} from '../recommendations';

test('should find recommendations for free run', async t => {
  t.deepEqual(await find('chapter'), recommendations);
});

test('should find recommendations for learner with base level', async t => {
  t.deepEqual(await find('level', '1.B'), recommendations);
});

test('should find recommendations for learner with advanced level', async t => {
  t.deepEqual(await find('level', '1.A'), recommendations);
});

test('should find recommendations for learner with coach level', async t => {
  t.deepEqual(await find('level', '1.C'), recommendations);
});
