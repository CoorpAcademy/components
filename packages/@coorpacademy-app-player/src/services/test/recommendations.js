import test from 'ava';
import recommendations from '../recommendations.data';
import {find} from '../recommendations';

test('should find recommendations', async t => {
  t.deepEqual(await find(), recommendations);
});
