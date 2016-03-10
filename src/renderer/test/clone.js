import test from 'ava';
import forEachRenderer from '../../util/for-each-renderer';

forEachRenderer(({h, clone}, name) => {
  test(`${name}: should clone element`, t => {
    const node = h('foo', {bar: 'baz'}, ['qux']);
    const cloneNode = clone(node);

    t.not(cloneNode, node);
    t.same(cloneNode, h('foo', {bar: 'baz'}, ['qux']));
  });

  test(`${name}: should clone element and replace property`, t => {
    const node = h('foo', {bar: 'baz'}, ['qux']);
    const cloneNode = clone(node, {bar: 'qux'});

    t.same(cloneNode, h('foo', {bar: 'qux'}, ['qux']));
  });

  test(`${name}: should clone element and replace deep property`, t => {
    const node = h('h1', {style:{color:'grey'}}, ['qux']);
    const pink = {style:{color:'pink'}};
    const cloneNode = clone(node, pink);

    t.same(cloneNode, h('h1', pink, ['qux']));
  });

  test(`${name}: should clone element and add property`, t => {
    const node = h('foo', {bar: 'baz'}, ['qux']);
    const cloneNode = clone(node, {baz: 'baz'});

    t.same(cloneNode, h('foo', {
      bar: 'baz',
      baz: 'baz'
    }, ['qux']));
  });

  test(`${name}: should clone element and add deep property`, t => {
    const node = h('foo', {bar: {baz: 'baz'}}, ['qux']);
    const cloneNode = clone(node, {bar: {qux: 'qux'}});

    t.same(cloneNode, h('foo', {
      bar: {
        baz: 'baz',
        qux: 'qux'
      }
    }, ['qux']));
  });

  test(`${name}: should clone element and replace children`, t => {
    const node = h('foo', {bar: 'baz'}, ['qux']);
    const cloneNode = clone(node, null, ['quux']);

    t.same(cloneNode, h('foo', {bar: 'baz'}, ['quux']));
  });
});
