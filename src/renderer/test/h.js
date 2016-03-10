import test from 'ava';
import forEachRenderer from '../../util/for-each-renderer';

forEachRenderer(({h, resolve}, name) => {
  test(`${name}: should create element`, t => {
    const node1 = h('div');
    const node2 = h('div');

    t.not(node1, node2);
    t.same(node1, node2);
  });

  test(`${name}: should create element with properties`, t => {
    const node1 = h('div', {style: {color: 'blue'}, name: 'test'});
    const node2 = h('div', {style: {color: 'blue'}, name: 'test'});

    t.same(node1, node2);
  });

  test(`${name}: should create element with null properties`, t => {
    const node1 = h('div', {});
    const node2 = h('div', null);

    t.same(node1, node2);
  });

  test(`${name}: should create element with empty children`, t => {
    const node1 = h('div', null, []);
    const node2 = h('div', {}, []);

    t.same(node1, node2);
  });

  test(`${name}: should create element with null children`, t => {
    const node1 = h('div', null, null);
    const node2 = h('div', {}, []);

    t.same(node1, node2);
  });

  test(`${name}: should create element with children`, t => {
    const children = [
      'title',
      h('span', null, 'sub-title')
    ];

    const node1 = h('div', null, children);
    const node2 = h('div', null, children);

    t.same(node1, node2);
  });

  test(`${name}: should create component`, t => {
    const Component = () => h('h1');

    const node1 = h(Component);
    const node2 = h('h1');

    t.same(resolve(node1), node2);
  });

  test(`${name}: should create component with props`, t => {
    const Component = ({name}) => h('h1', {name});

    const node1 = h(Component, {name: 'foo'});
    const node2 = h('h1', {name: 'foo'});

    t.same(resolve(node1), node2);
  });

  test(`${name}: should create component with children`, t => {
    const Component = ({foo, bar, children}) => h('h1', null, [
      foo,
      h('h2', null, [bar]),
      ...children
    ]);

    const node1 = h(Component, {foo: 'foo', bar: 'bar'}, ['baz']);
    const node2 = h('h1', null, [
      'foo',
      h('h2', null, ['bar']),
      'baz'
    ]);

    t.same(resolve(node1), node2);
  });
});
