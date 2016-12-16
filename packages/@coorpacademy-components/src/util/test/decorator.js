import Inferno from 'inferno';
import test from 'ava';
import * as treant from '@coorpacademy/treantjs-core';
import Decorator from '../decorator';

const {h, resolve, walker} = treant;

test('should decorate element', t => {
  const List = (props, children) => <ul {...props}>{children}</ul>;
  const ItemList = (props, children) => <li {...props}>{children}</li>;

  const CompleteList = createDecorator(treant)(List)(ItemList);

  const tree = <CompleteList>foo</CompleteList>;
  const expected = (
    <ul>
      <li>foo</li>
    </ul>
  );
  t.deepEqual(walker(resolve, tree), expected);
});

test('should pass properties to composite components', t => {
  const List = (props, children) => <ul {...props}>{children}</ul>;
  const ItemList = (props, children) => <li {...props}>{children}</li>;

  const CompleteList = createDecorator(treant)(List, {foo: 'foo'})(ItemList, {bar: 'bar'});

  const tree = <CompleteList>foo</CompleteList>;
  const expected = (
    <ul foo="foo">
      <li bar="bar">foo</li>
    </ul>
  );
  t.deepEqual(walker(resolve, tree), expected);
});
