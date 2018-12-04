import test from 'ava';
import keys from 'lodash/fp/keys';
import * as services from '..';

test('should expose services', t => {
  t.deepEqual(keys(services), [
    '__esModule',
    'Analytics',
    'Answers',
    'Clues',
    'Coach',
    'Comments',
    'Content',
    'ExitNodes',
    'LeaderBoard',
    'Location',
    'Logger',
    'Progressions',
    'Recommendations'
  ]);
});
