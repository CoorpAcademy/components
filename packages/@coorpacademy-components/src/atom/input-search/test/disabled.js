import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Search from '..';

browserEnv();
test.afterEach.always(cleanup);
test.serial('disabled search keeps its input mounted and prevents change and clear', t => {
  const calls = [];
  const view = render(
    <Search
      theme="coorpmanager"
      disabled
      placeholder="Search modules"
      value="cloud"
      onChange={value => calls.push(value)}
      onClear={() => calls.push('clear')}
    />,
    {wrapper: wrappingComponent}
  );
  const input = view.getByRole('textbox');
  t.true(input.disabled);
  fireEvent.input(input, {target: {value: 'security'}});
  const clear = view.container.querySelector('[class*="clearIcon"]');
  if (clear) fireEvent.click(clear);
  t.deepEqual(calls, []);
  view.rerender(
    <Search placeholder="Search modules" value="cloud" onChange={value => calls.push(value)} />
  );
  t.false(input.disabled);
  fireEvent.input(input, {target: {value: 'security'}});
  t.deepEqual(calls, ['security']);
});
