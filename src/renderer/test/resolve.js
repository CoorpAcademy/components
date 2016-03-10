import test from 'ava';
import forEachRenderer from '../../util/for-each-renderer';

forEachRenderer(({h, resolve}, name) => {
  test(`${name}: should resolve component node`, t => {
    const Component = props => h('h1');
    const tree = h(Component);

    t.same(resolve(tree), h('h1'));
  });

  test(`${name}: should resolve component node with properties`, t => {
    const Component = props => h('h1', props);
    const tree = h(Component, {foo: 'bar'});

    t.same(resolve(tree), h('h1', {foo: 'bar'}));
  });

  test(`${name}: should resolve component node with children`, t => {
    const Component = props => h('h1', props, props.children);
    const tree = h(Component, {foo: 'bar'}, ['baz']);

    t.same(resolve(tree), h('h1', {foo: 'bar'}, ['baz']));
  });
});
