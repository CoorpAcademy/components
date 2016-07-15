import test from 'ava';
import get from 'lodash/fp/get';

import createWidget from '../create-widget';
import isWidget from '../is-widget';
import h from '../h';
import walker from '../walker';
import resolve from '../resolve';

test('should create Widget', t => {
  const Widget = createWidget();
  t.truthy(isWidget(new Widget()));
});

['init', 'update', 'destroy'].forEach(hookName =>
  test(`should create Widget with ${hookName} hook`, t => {
    const hook = () => {};
    const Widget = createWidget({
      [hookName]: hook
    });
    t.truthy(get(hookName, new Widget()), hook);
  })
);

test('should default tagName be DIV', t => {
  const Widget = createWidget();
  t.deepEqual(new Widget().tagName, 'div');
});

test('should extend tagName', t => {
  const Widget = createWidget({
    tagName: 'span'
  });
  t.deepEqual(new Widget().tagName, 'span');
});

test('should skip widget on resolve', t => {
  const Widget = createWidget();
  t.deepEqual(resolve(new Widget()), new Widget());
});
