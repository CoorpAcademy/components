import test from 'ava';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Provider from '../../../atom/provider';
import Banner from '..';

test.afterEach(cleanup);
const wrap = element => <Provider translate={key => key}>{element}</Provider>;

test.serial('legacy switch toggles immediately without parent prop updates', t => {
  const calls = [];
  const props = {
    type: 'info',
    message: 'Microlearning',
    cta: [{type: 'switch', label: 'Show microlearning', action: value => calls.push(value)}]
  };
  const view = render(wrap(<Banner {...props} />));
  const checkbox = view.getByRole('checkbox');
  t.false(checkbox.checked);
  fireEvent.click(checkbox);
  t.true(checkbox.checked);
  fireEvent.click(checkbox);
  t.false(checkbox.checked);
  t.deepEqual(calls, [true, false]);
});

test.serial('legacy switch uses oldSwitchValue only on mount and keeps state on re-render', t => {
  const calls = [];
  const cta = {
    type: 'switch',
    label: 'Show microlearning',
    oldSwitchValue: true,
    action: value => calls.push(value)
  };
  const props = {type: 'info', message: 'Microlearning', cta: [cta]};
  const view = render(wrap(<Banner {...props} />));
  const checkbox = view.getByRole('checkbox');
  t.true(checkbox.checked);
  view.rerender(wrap(<Banner {...props} cta={[{...cta, oldSwitchValue: false}]} />));
  t.true(checkbox.checked);
  fireEvent.click(checkbox);
  t.false(checkbox.checked);
  t.deepEqual(calls, [false]);
  view.rerender(wrap(<Banner {...props} message="Updated description" />));
  t.false(checkbox.checked);
  t.truthy(view.getByText('Updated description'));
  view.unmount();
  const remounted = render(wrap(<Banner {...props} />));
  t.true(remounted.getByRole('checkbox').checked);
});
