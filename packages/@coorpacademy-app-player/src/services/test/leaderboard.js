import test from 'ava';
import {getRank} from '../leaderboard';

test('should fetch rank', async t => {
  t.deepEqual(await getRank(), 12);
});
