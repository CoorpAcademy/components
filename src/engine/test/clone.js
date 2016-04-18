import test from 'ava';
import forEachEngine from '../../util/for-each-engine';

forEachEngine((name, {h, clone}) => {
  test(`${name}: should clone element`, t => {
    const node = <span bar="baz">qux</span>;
    const cloneNode = clone(node);

    t.not(cloneNode, node);
    t.deepEqual(cloneNode, <span bar="baz">qux</span>);
  });

  test(`${name}: should clone element and replace property`, t => {
    const node = <span bar="baz">qux</span>;
    const cloneNode = clone(node, {bar: 'qux'});

    t.deepEqual(cloneNode, <span bar="qux">qux</span>);
  });

  test(`${name}: should clone element and replace deep property`, t => {
    const node = <h1 style={{color:'grey'}}>qux</h1>;
    const pink = {style:{color:'pink'}};
    const cloneNode = clone(node, pink);

    t.deepEqual(cloneNode, <h1 {...pink}>qux</h1>);
  });

  test(`${name}: should clone element and add property`, t => {
    const node = <span bar="baz">qux</span>;
    const cloneNode = clone(node, {baz: 'baz'});

    t.deepEqual(cloneNode, <span bar="baz" baz="baz">qux</span>);
  });

  test(`${name}: should clone element and add deep property`, t => {
    const node = <span bar={{baz: 'baz'}}>qux</span>;
    const cloneNode = clone(node, {bar: {qux: 'qux'}});

    t.deepEqual(cloneNode, <span bar={{baz: 'baz', qux: 'qux'}}>qux</span>);
  });

  test(`${name}: should clone element and replace children`, t => {
    const node = <span bar={{baz: 'baz'}}>qux</span>;
    const cloneNode = clone(node, null, ['quux']);

    t.deepEqual(cloneNode, <span bar={{baz: 'baz'}}>quux</span>);
  });
});
