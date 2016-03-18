import test from 'ava';
import forEachEngine from '../for-each-engine';

import createDecorator from '../decorator';

forEachEngine((engine, name) => {
  const {h, resolve, walker} = engine;

  test(`${name}: should decorate element`, t => {
    const List = props => <ul {...props}>{props.children}</ul>;
    const ItemList = props => <li {...props}>{props.children}</li>;

    const CompleteList = createDecorator(engine)(List)(ItemList);

    const tree = <CompleteList>foo</CompleteList>;

    t.same(walker(resolve, tree), (
      <ul>
        <li>foo</li>
      </ul>
    ));
  });

  test(`${name}: should pass properties to composite components`, t => {
    const List = props => <ul {...props}>{props.children}</ul>;
    const ItemList = props => <li {...props}>{props.children}</li>;

    const CompleteList = createDecorator(engine)(List, {foo: 'foo'})(ItemList, {bar: 'bar'});

    const tree = <CompleteList>foo</CompleteList>;

    t.same(walker(resolve, tree), (
      <ul foo="foo">
        <li bar="bar">foo</li>
      </ul>
    ));
  });
});
