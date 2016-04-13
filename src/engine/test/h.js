import test from 'ava';
import forEachEngine from '../../util/for-each-engine';

forEachEngine((name, {h, resolve, map}) => {
  test(`${name}: should create element`, t => {
    const node1 = h('div');
    const node2 = <div/>;

    t.not(node1, node2);
    t.same(node1, node2);
  });

  test(`${name}: should create element with properties`, t => {
    const node1 = h('div', {style: {color: 'blue'}, name: 'test'});
    const node2 = <div style={{color: 'blue'}} name="test"/>;

    t.same(node1, node2);
  });

  test(`${name}: should create element with null properties`, t => {
    const node1 = h('div', {});
    const node2 = h('div', null);
    const node3 = <div/>;

    t.same(node1, node2);
    t.same(node1, node3);
  });

  test(`${name}: should create element with empty children`, t => {
    const node1 = h('div', null, []);
    const node2 = h('div', {}, []);
    const node3 = <div/>;

    t.same(node1, node2);
    t.same(node1, node3);
  });

  test(`${name}: should create element with null children`, t => {
    const node1 = h('div', null, null);
    const node2 = h('div', {}, []);
    const node3 = <div/>;

    t.same(node1, node2);
    t.same(node1, node3);
  });

  test(`${name}: should create element with children`, t => {
    const children = [
      'title',
      h('span', null, 'sub-title')
    ];

    const node1 = h('div', null, children);
    const node2 = h('div', null, children);
    const node3 = <div>{children}</div>;

    t.same(node1, node2);
    t.same(node1, node3);
  });

  test(`${name}: should create component`, t => {
    const Component = () => h('h1');

    const node1 = h('h1');
    const node2 = h(Component);
    const node3 = <Component/>;

    t.same(resolve(node2), node1);
    t.same(resolve(node3), node1);
  });

  test(`${name}: should create component with props`, t => {
    const Component = ({name}) => h('h1', {name});

    const node1 = h('h1', {name: 'foo'});
    const node2 = h(Component, {name: 'foo'});
    const node3 = <Component name="foo"/>;

    t.same(resolve(node2), node1);
    t.same(resolve(node3), node1);
  });

  test(`${name}: should create component with children`, t => {
    const Component = ({foo, bar, children}) => h('h1', null,
      foo,
      h('h2', null, bar),
      ...map(c => c, children)
    );

    const node1 = h('h1', null,
      'foo',
      h('h2', null, 'bar'),
      'baz'
    );
    const node2 = h(Component, {foo: 'foo', bar: 'bar'}, 'baz');
    const node3 = <Component foo="foo" bar="bar">baz</Component>;

    t.same(resolve(node2), node1);
    t.same(resolve(node3), node1);
  });
});
