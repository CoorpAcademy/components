import {h} from '@coorpacademy/treantjs-core';

export default (test, {render, transform}) => {
  test('should render vTree', t => {
    const root = render(document.createElement('div'))(<h1>foo</h1>);
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  test('should render vTree with Components', t => {
    const Component = props => <h1>foo</h1>;
    const root = render(document.createElement('div'))(Component());
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  test('should update rendering', t => {
    const root = document.createElement('div');
    const update = render(root);

    const h1 = update(<h1/>);
    t.is(h1.tagName, 'H1');

    const h2 = update(<h2/>);
    t.is(h2.tagName, 'H2');
  });
};
