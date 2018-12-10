import test from 'ava';
import testRendering from './helpers/render';
import stateToVNode from './helpers/state-to-vnode';

const mapStateToVNode = stateToVNode({}, {});

test('should display loading view', t => {
  const vNode = mapStateToVNode({});
  t.notThrows(() => testRendering(vNode));
});
