import test from 'ava';
import shallowCompare from '../shallow-compare';

test('should shallow compare', t => {
  const _this = {
    props: 'foo',
    state: 'bar',
    context: 'baz'
  };

  t.false(shallowCompare(_this, 'foo', 'bar', 'baz'));
  t.true(shallowCompare(_this, 'plop', 'bar', 'baz'));
});
