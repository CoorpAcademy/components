import test from 'ava';
import {isNumber} from 'lodash/fp';
import {getRank} from '../leaderboard';

test('should fetch rank', async t => {
  t.true(isNumber(await getRank()));
});
