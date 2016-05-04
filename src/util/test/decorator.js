import test from 'ava';
import forEachEngine from '../for-each-engine';

import createDecorator from '../decorator';

forEachEngine((name, engine) => {
  const {h, resolve, walker} = engine;

  test(`${name}: should decorate element`, t => {
    const List = (props, children) => <ul {...props}>{children}</ul>;
    const ItemList = (props, children) => <li {...props}>{children}</li>;

    const CompleteList = createDecorator(engine)(List)(ItemList);

    const tree = <CompleteList>foo</CompleteList>;

    t.deepEqual(walker(resolve, tree), (
      <ul>
        <li>foo</li>
      </ul>
    ));
  });

  test(`${name}: should pass properties to composite components`, t => {
    const List = (props, children) => <ul {...props}>{children}</ul>;
    const ItemList = (props, children) => <li {...props}>{children}</li>;

    const CompleteList = createDecorator(engine)(List, {foo: 'foo'})(ItemList, {bar: 'bar'});

    const tree = <CompleteList>foo</CompleteList>;

    t.deepEqual(walker(resolve, tree), (
      <ul foo="foo">
        <li bar="bar">foo</li>
      </ul>
    ));
  });
});
