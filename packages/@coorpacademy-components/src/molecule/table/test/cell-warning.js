import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Table from '..';

browserEnv();
test.afterEach.always(cleanup);
const message = '4/4 accessible modules completed · 1 unavailable module';
const props = {
  editable: false,
  columns: [{title: 'Progress'}],
  rows: [{fields: [{text: '4 / 5 modules', warning: message}]}]
};

test.serial(
  'warning preserves historical progress and opens a portal tooltip on hover',
  async t => {
    const user = userEvent.setup({document});
    const {container} = render(<Table {...props} />, {wrapper: wrappingComponent});
    t.is(container.querySelector('tbody td').textContent, '4 / 5 modules');
    const button = within(container).getByRole('button', {name: message});
    t.falsy(document.querySelector('[role="tooltip"]'));
    await user.hover(button);
    const tooltip = within(document.body).getByRole('tooltip');
    t.is(tooltip.textContent, message);
    t.is(button.getAttribute('aria-describedby'), tooltip.id);
    t.false(container.contains(tooltip));
    await user.unhover(button);
    await new Promise(resolve => {
      setTimeout(resolve, 180);
    });
    t.falsy(document.querySelector('[role="tooltip"]'));
  }
);

test.serial('keyboard focus opens the warning, Escape dismisses it and blur closes it', async t => {
  const originalSelection = document.getSelection;
  document.getSelection = () => null;
  t.teardown(() => {
    if (originalSelection) document.getSelection = originalSelection;
    else delete document.getSelection;
  });
  const user = userEvent.setup({document});
  const {container} = render(<Table {...props} />, {wrapper: wrappingComponent});
  const button = within(container).getByRole('button', {name: message});
  await user.tab();
  t.is(document.activeElement, button);
  // This repository's older JSDOM does not dispatch focusin/focusout from native focus().
  fireEvent.focus(button);
  t.truthy(document.querySelector('[role="tooltip"]'));
  fireEvent.mouseLeave(button);
  fireEvent.keyDown(button, {key: 'ArrowRight'});
  t.truthy(document.querySelector('[role="tooltip"]'));
  await user.keyboard('{Escape}');
  t.falsy(document.querySelector('[role="tooltip"]'));
  fireEvent.click(button);
  t.truthy(document.querySelector('[role="tooltip"]'));
  fireEvent.blur(button);
  t.falsy(document.querySelector('[role="tooltip"]'));
});

test.serial('distinct warnings have unique tooltip ids and plain rows have no warning', async t => {
  const user = userEvent.setup({document});
  const {container} = render(
    <Table
      {...props}
      rows={[
        ...props.rows,
        {
          fields: [
            {text: '0 / 5 modules', warning: 'No accessible content · 5 unavailable modules'}
          ]
        },
        {fields: ['5 / 5 modules']}
      ]}
    />,
    {wrapper: wrappingComponent}
  );
  const buttons = within(container).getAllByTestId('table-cell-warning');
  t.is(buttons.length, 2);
  await user.hover(buttons[0]);
  const first = buttons[0].getAttribute('aria-describedby');
  await user.hover(buttons[1]);
  t.not(buttons[1].getAttribute('aria-describedby'), first);
  t.is(container.querySelectorAll('tbody td')[2].textContent, '5 / 5 modules');
});
