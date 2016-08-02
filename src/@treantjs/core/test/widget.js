import test from 'ava';
import get from 'lodash/fp/get';

import Widget from '../widget';
import isWidget from '../is-widget';
import h from '../h';
import walker from '../walker';
import resolve from '../resolve';

test('should create Widget', t => {
    const widget = new Widget();
    t.truthy(isWidget(widget));
});

['init', 'update', 'destroy'].forEach(hookName =>
  test(`should create Widget with ${hookName} hook`, t => {
    const hook = () => {};
    const widget = new Widget({
      [hookName]: hook
    });
    t.truthy(get(hookName, widget), hook);
  })
);

test('should default tagName be DIV', t => {
  const widget = new Widget();
  t.deepEqual(widget.tagName, 'div');
});

test('should extend tagName', t => {
  const widget = new Widget({
    tagName: 'span'
  });
  t.deepEqual(widget.tagName, 'span');
});

test('should skip widget on resolve', t => {
  const widget = new Widget();
  t.deepEqual(resolve(widget), widget);
});
