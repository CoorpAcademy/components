import test from 'ava';
import forEachEngine from '../../util/for-each-engine';

forEachEngine((name, {h, clone}) => {
  test(`${name} › should clone element`, t => {
    const node = <span bar="baz">qux</span>;
    const cloneNode = clone(node);

    t.not(cloneNode, node);
    const expected = <span bar="baz">qux</span>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone simple element`, t => {
    const node = <span/>;
    const cloneNode = clone(node);

    t.not(cloneNode, node);
    const expected = <span/>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone element and replace property`, t => {
    const node = <span bar="baz">qux</span>;
    const cloneNode = clone(node, {bar: 'qux'});

    const expected = <span bar="qux">qux</span>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone element and replace deep property`, t => {
    const node = <h1 style={{color: 'grey'}}>qux</h1>;
    const pink = {style: {color: 'pink'}};
    const cloneNode = clone(node, pink);

    const expected = <h1 {...pink}>qux</h1>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone element and add property`, t => {
    const node = <span bar="baz">qux</span>;
    const cloneNode = clone(node, {baz: 'baz'});

    const expected = <span bar="baz" baz="baz">qux</span>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone element and add deep property`, t => {
    const node = <span bar={{baz: 'baz'}}>qux</span>;
    const cloneNode = clone(node, {bar: {qux: 'qux'}});

    const expected = <span bar={{baz: 'baz', qux: 'qux'}}>qux</span>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone element and replace children`, t => {
    const node = <span bar={{baz: 'baz'}}>qux</span>;
    const cloneNode = clone(node, null, ['quux']);

    const expected = <span bar={{baz: 'baz'}}>quux</span>;
    t.deepEqual(cloneNode, expected);
  });

  test(`${name} › should clone element and merge classNames`, t => {
    const node = <span className={'foo'}></span>;
    const wrapperProperties = {className: 'bar'};
    const cloneNode = clone(node, wrapperProperties);

    const expected = <span className={'foo bar'}></span>;
    t.deepEqual(cloneNode, expected);
  });
});
