// @flow
import test from 'ava';
import updateProgression from '../update-progression';

test('should return the given progression untouched (TMP)', t => {
  const progression = Object.freeze({});
  const action = Object.freeze({});

  t.deepEqual(updateProgression(progression, action), progression);
});
