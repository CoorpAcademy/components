import test from 'ava';
import mapValues from 'lodash.mapvalues';
import react from '../react';
import virtualDom from '../virtual-dom';

const rendererTest = ({h, clone, map, resolve, walker, toString}, name) => {
  test(`${name}: h`, t => {
    const style = {color:'pink'};
    const log = () => true;
    const vNode = h('div', {style: style, onClick: log}, [
      h('h1', {}, 'foo'),
      h('h2', {}, 'bar')
    ]);
    t.same(vNode, h('div', {style: style, onClick: log}, [
      h('h1', {}, 'foo'),
      h('h2', {}, 'bar')
    ]));
  });

  test(`${name}: clone`, t => {
    const style = {color:'pink'};
    const vNode = h('h1', {}, 'foo');

    const propsVNode = clone(vNode, {style: style});
    t.same(propsVNode, h('h1', {style: style}, 'foo'));

    const childrenVNode = clone(vNode, {}, 'bar');
    t.same(childrenVNode, h('h1', {}, 'bar'));
  });

  test(`${name}: map`, t => {
    const h1 = h('h1', {}, 'foo');
    const h2 = h('h2', {}, 'bar');

    const mapper = (child, index) => clone(child, {key:index});

    const components = [h1, h2];
    const children = map(mapper, [h1, h2]);

    t.ok(Array.isArray(children));
    t.is(children.length, 2);
    children.forEach((child, index) => {
      t.same(clone(child, {key: undefined}), components[index]);
    });
  });

  test(`${name}: resolve`, t => {
    const Component = props => h('h1', props, props.children);
    const vNode = h(Component, {style:{color:'pink'}}, 'foo');

    t.same(resolve(vNode), h('h1', {style:{color:'pink'}}, 'foo'));
  });

  test(`${name}: walker`, t => {
    const h1 = h('h1', {}, 'foo');
    const h2 = h('h2', {}, 'bar');
    const header = h('header', {}, [h1, h2]);
    const result = [header, h1, h2];
    walker((child) => {
      t.same(child, result.shift());
      return child;
    }, header);
  });
};

mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, rendererTest);