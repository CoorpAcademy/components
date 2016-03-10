import test from 'ava';
import forEachRenderer from '../../util/for-each-renderer';

forEachRenderer(({h, walker, resolve}, name) => {
  test(`${name}: should travel each tree's nodes`, t => {
    const tree = h('header', null, [
      h('foo', null, 'foo'),
      h('bar', null, [
        h('baz', null, 'baz')
      ])
    ]);

    t.plan(4);
    walker(child => t.pass() || child, tree);
  });

  test(`${name}: should resolve each nodes`, t => {
    const Header = props => h('header', props, props.children);
    const Foo = props => h('foo', props, props.children);
    const Bar = props => h('bar', props, props.children);
    const Baz = props => h('baz', props, props.children);

    const tree = h(Header, null, [
      h(Foo, null, 'foo'),
      h(Bar, null, [
        h(Baz, null, 'baz')
      ])
    ]);


    t.same(walker(resolve, tree), (
      h('header', null, [
        h('foo', null, ['foo']),
        h('bar', null, [
          h('baz', null, ['baz'])
        ])
      ]))
    );
  });
});
