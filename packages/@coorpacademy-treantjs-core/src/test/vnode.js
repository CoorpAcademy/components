import test from 'ava';

import VNode from '../vnode';

test('should create vnode instsance', t => {
  const node = new VNode('div', {}, []);
  t.truthy(node);
});
