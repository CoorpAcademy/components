import test from 'ava';

import isWidget from '../is-widget';
import Widget from '../widget';
import VNode from '../vnode';

test('should returns true on widget', t => {
  const widget = new Widget();
  t.truthy(isWidget(widget));
});

test('should returns false on String', t => {
  t.falsy(isWidget('foo'));
});

test('should returns false on VNode', t => {
  const node = new VNode('div', {}, []);
  t.falsy(isWidget(node));
});
