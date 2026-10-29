import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithTitle from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';

browserEnv();
test.afterEach.always(cleanup);
test.serial('disabled checkbox stays visible and cannot change', t => {
  const calls = [];
  const view = render(
    <CheckboxWithTitle disabled checked={false} onChange={value => calls.push(value)} />,
    {wrapper: wrappingComponent}
  );
  const input = view.getByRole('checkbox');
  t.true(input.disabled);
  fireEvent.click(input);
  t.deepEqual(calls, []);
});
test.serial('omitted disabled preserves existing checkbox interaction', t => {
  const calls = [];
  const view = render(<CheckboxWithTitle checked={false} onChange={value => calls.push(value)} />, {
    wrapper: wrappingComponent
  });
  fireEvent.click(view.getByRole('checkbox'));
  t.deepEqual(calls, [true]);
});
