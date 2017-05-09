import test from 'ava';
import shallowCompare from '../shallow-compare';

test('should compare', t => {
  const component = {
    props: {foo: 'foo'},
    state: {bar: 'bar'},
    context: {baz: 'baz'}
  };

  t.false(shallowCompare(component, {foo: 'foo'}, {bar: 'bar'}, {baz: 'baz'}));
  t.true(shallowCompare(component, {foo: 'foo'}, {bar: 'bar'}, {baz: '_baz'}));
  t.true(shallowCompare(component, {foo: 'foo'}, {bar: '_bar'}, {baz: 'baz'}));
  t.true(shallowCompare(component, {foo: '_foo'}, {bar: 'bar'}, {baz: 'baz'}));
});
