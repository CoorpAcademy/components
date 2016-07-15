import test from 'ava';

import isWidget from '../is-widget';
import createWidget from '../create-widget';
import VNode from '../vnode';

test('should returns true on widget', t => {
  const Widget = createWidget();
  t.truthy(isWidget(new Widget()));
});

test('should returns false on String', t => {
  t.falsy(isWidget('foo'));
});

test('should returns false on VNode', t => {
  const node = new VNode('div', {}, []);
  t.falsy(isWidget(node));
});
