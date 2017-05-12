// @flow
import test from 'ava';
import checkAnswer from '../check-answer';

test('should always return true (TMP)', t => {
  t.true(checkAnswer());
});
