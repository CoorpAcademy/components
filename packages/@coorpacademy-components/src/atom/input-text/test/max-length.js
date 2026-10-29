import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import InputText from '..';

browserEnv();
test.afterEach.always(cleanup);
test.serial('forwards supplied maxLength and keeps string callback', t => {
  const calls = [];
  const view = render(<InputText maxLength={100} value="" onChange={value => calls.push(value)} />);
  const input = view.getByRole('textbox');
  t.is(input.maxLength, 100);
  fireEvent.input(input, {target: {value: 'Assignment'}});
  t.deepEqual(calls, ['Assignment']);
});
test.serial('omitted maxLength leaves the default fixture unrestricted', t => {
  const view = render(<InputText />);
  t.false(view.getByRole('textbox').hasAttribute('maxlength'));
});
