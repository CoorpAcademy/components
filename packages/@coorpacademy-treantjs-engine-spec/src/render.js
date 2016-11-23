import {h} from '@coorpacademy/treantjs-core';

export default (test, {render, transform}) => {
  test('should render vTree', t => {
    const container = document.createElement('div');
    const update = render(container);
    const el = update(<h1>foo</h1>);
    t.is(el.tagName, 'H1');
    t.is(el.textContent, 'foo');
  });

  test('should render vTree with Components', t => {
    const container = document.createElement('div');
    const update = render(container);
    const Component = props => <h1>foo</h1>;
    const el = update(Component());
    t.is(el.tagName, 'H1');
    t.is(el.textContent, 'foo');
  });

  test('should update rendering', t => {
    const container = document.createElement('div');
    const update = render(container);

    const h1 = update(<h1/>);
    t.is(h1.tagName, 'H1');

    const h2 = update(<h2/>);
    t.is(h2.tagName, 'H2');
  });

  test('should erase existing node', t => {
    const container = document.createElement('div');
    container.innerHTML = '<span>foo</span>';
    const update = render(container);

    const h1 = update(<h1/>);
    t.is(h1.tagName, 'H1');
  });
};
