import test from 'ava';

import isVNode from '../is-vnode';
import VNode from '../vnode';
import createWidget from '../create-widget';

test('should returns true on VNode', t => {
  const node = new VNode('div', {}, []);
  t.truthy(isVNode(node));
});

test('should returns false on String', t => {
  t.falsy(isVNode('foo'));
});

test('should returns false on widget', t => {
  const Widget = createWidget();
  t.falsy(isVNode(new Widget()));
});
