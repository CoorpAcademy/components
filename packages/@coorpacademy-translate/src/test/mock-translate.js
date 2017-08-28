import test from 'ava';
import {mockTranslate} from '../translate';

test('should return key prepended with `__` when there is no data', t => {
  const result = mockTranslate('foo bar');

  t.is(result, '__foo bar');
});

test('should return key prepended with `__` and appended with stringified data', t => {
  const result = mockTranslate('foo bar', {count: 1, baz: 'ok'});

  t.is(result, '__foo bar{"count":1,"baz":"ok"}');
});
