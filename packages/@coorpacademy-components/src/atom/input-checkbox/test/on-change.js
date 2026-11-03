import test from 'ava';
import {readFileSync} from 'fs';
import path from 'path';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import InputCheckbox from '..';
import style from '../style.css';
import defaultFixture from './fixtures/default';
import checkedFixture from './fixtures/checked';
import disabledFixture from './fixtures/disabled';
import checkedDisabledFixture from './fixtures/checked-disabled';

browserEnv({pretendToBeVisual: true});
test.afterEach.always(cleanup);

test('should call the onChange function with the checked value of the target', t => {
  t.plan(4);
  const expectedOnChangeValues = [true, false];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const {container, rerender} = render(
    <InputCheckbox {...defaultFixture.props} onChange={onChange} />
  );

  const checkbox = container.querySelector('[data-name="checkbox-label"] svg');
  t.truthy(checkbox);

  fireEvent.click(checkbox);

  rerender(<InputCheckbox {...defaultFixture.props} onChange={onChange} checked />);

  t.truthy(checkbox);

  fireEvent.click(checkbox);
});

test.serial(
  'hideTitle preserves the accessible name next-boolean callback and visible focus',
  t => {
    const calls = [];
    const props = {
      ...defaultFixture.props,
      title: 'Select Alice',
      checked: false,
      hideTitle: true,
      theme: 'coorpmanager',
      onChange: value => calls.push(value)
    };
    const view = render(<InputCheckbox {...props} />);
    const input = within(view.container).getByRole('checkbox', {name: 'Select Alice'});
    const label = input.closest('label');
    t.is(label.htmlFor, input.id);
    t.true(label.classList.contains(style.hiddenTitle));
    t.true(label.querySelector('span').className.includes(style.accessibleTitle));
    t.false(label.querySelector('span').classList.contains(style.primary));
    input.focus();
    t.is(document.activeElement, input);
    fireEvent.click(input);
    t.deepEqual(calls, [true]);
    t.false(input.checked);
    view.rerender(<InputCheckbox {...props} checked />);
    fireEvent.click(input);
    t.deepEqual(calls, [true, false]);
    const css = readFileSync(path.join(__dirname, '../style.css'), 'utf8');
    t.regex(
      css,
      /\.hiddenTitle input:focus-visible \+ \.label\s*\{[^}]*outline:\s*2px solid cm_primary_blue/
    );
  }
);

test.serial(
  'hidden-title label activation uses the current callback and controlled value after re-enabling',
  t => {
    const calls = [];
    const props = {
      title: 'Select learner',
      checked: false,
      hideTitle: true,
      onChange: (...args) => calls.push(['first', ...args])
    };
    const view = render(<InputCheckbox {...props} />);
    const input = () => within(view.container).getByRole('checkbox', {name: 'Select learner'});
    fireEvent.click(input().closest('label').querySelector('svg'));
    t.deepEqual(calls, [['first', true]]);
    t.false(input().checked);
    const next = {...props, checked: true, onChange: (...args) => calls.push(['next', ...args])};
    view.rerender(<InputCheckbox {...next} disabled />);
    fireEvent.click(input().closest('label'));
    t.true(input().checked);
    t.deepEqual(calls, [['first', true]]);
    view.rerender(<InputCheckbox {...next} />);
    fireEvent.click(input().closest('label').querySelector('span'));
    t.deepEqual(calls, [
      ['first', true],
      ['next', false]
    ]);
    t.true(input().checked);
  }
);

test.serial(
  'switching hidden title mode preserves literal labels and unique input associations',
  t => {
    const props = {title: '<b>Same learner & team</b>', checked: true, onChange: () => {}};
    const renderPair = hideTitle => (
      <div>
        <InputCheckbox {...props} hideTitle={hideTitle} />
        <InputCheckbox {...props} hideTitle={hideTitle} />
      </div>
    );
    const view = render(renderPair(false));
    [true, false, true].forEach(hideTitle => {
      view.rerender(renderPair(hideTitle));
      const inputs = within(view.container).getAllByRole('checkbox', {name: props.title});
      t.is(inputs.length, 2);
      t.not(inputs[0].id, inputs[1].id);
      inputs.forEach(input => {
        t.true(input.checked);
        const label = input.closest('label');
        t.is(label.htmlFor, input.id);
        t.is(label.querySelector('span').textContent, props.title);
        t.is(label.querySelector('b'), null);
        t.is(label.classList.contains(style.hiddenTitle), hideTitle);
        t.is(label.querySelector('span').className.includes(style.accessibleTitle), hideTitle);
      });
    });
  }
);

test.serial('disabled label-only checkbox cannot toggle', t => {
  let calls = 0;
  const view = render(
    <InputCheckbox
      title="Deleted account"
      hideTitle
      disabled
      checked={false}
      onChange={() => calls++}
    />
  );
  const input = within(view.container).getByRole('checkbox', {name: 'Deleted account'});
  t.true(input.disabled);
  input.click();
  fireEvent.click(input.closest('label').querySelector('[data-name="checkbox-label"]'));
  t.is(calls, 0);
  t.false(input.checked);
});

test.serial('legacy checkbox fixtures keep visible titles and class structure', t => {
  [defaultFixture, checkedFixture, disabledFixture, checkedDisabledFixture].forEach(({props}) => {
    const view = render(<InputCheckbox {...props} />);
    const label = view.container.querySelector('label');
    t.deepEqual(
      [...label.children].map(child => child.tagName),
      ['INPUT', 'DIV', 'SPAN']
    );
    t.false(label.classList.contains(style.hiddenTitle));
    t.true(label.querySelector('span').className.includes(style[props.titleStyle || 'primary']));
    t.is(label.querySelector('span').textContent, props.title + (props.required ? '*' : ''));
    t.is(label.querySelector('input').checked, Boolean(props.checked));
    t.is(label.querySelector('input').disabled, Boolean(props.disabled));
    view.unmount();
  });
});
