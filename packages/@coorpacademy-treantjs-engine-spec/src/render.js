import pipe from 'lodash/fp/pipe';
import {h} from '@coorpacademy/treantjs-core';

export default (test, {render, transform}) => {
  test('should render vTree', t => {
    const update = pipe(
      transform,
      render(document.createElement('div'))
    );
    const el = update(<h1>foo</h1>);
    t.is(el.tagName, 'H1');
    t.is(el.textContent, 'foo');
  });

  test('should render vTree with Components', t => {
    const update = pipe(
      transform,
      render(document.createElement('div'))
    );
    const Component = props => <h1>foo</h1>;
    const root = update(Component());
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  test('should update rendering', t => {
    const update = pipe(
      transform,
      render(document.createElement('div'))
    );

    const h1 = update(<h1/>);
    t.is(h1.tagName, 'H1');

    const h2 = update(<h2/>);
    t.is(h2.tagName, 'H2');
  });
};
