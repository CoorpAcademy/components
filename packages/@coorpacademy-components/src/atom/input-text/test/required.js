import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import InputText from '..';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'required text fields expose the required state without duplicating the section marker',
  t => {
    const view = render(<InputText title="Title" required />);
    t.true(view.getByRole('textbox').required);
    t.is(view.queryByText('*'), null);
  }
);

test.serial('ordinary text fields stay optional', t => {
  const view = render(<InputText title="Title" />);
  t.false(view.getByRole('textbox').required);
  t.is(view.queryByText('*'), null);
});
