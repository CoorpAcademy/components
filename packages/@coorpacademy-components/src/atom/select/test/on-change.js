import test from 'ava';
import {render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import browserEnv from 'browser-env';
import React from 'react';
import Select from '..';
import defaultFixture from './fixtures/default';

browserEnv();

document.getSelection = () => {
  return {
    removeAllRanges: () => {}
  };
};

test('should call onChange with the target value if multiple=false', t => {
  t.plan(3);

  const handleChange = e => {
    t.is(e, 'Pouet4');
  };

  const {getByTestId, getByRole, unmount} = render(
    <Select {...defaultFixture.props} onChange={handleChange} />
  );

  t.is(getByRole('option', {name: 'Pouet2'}).selected, true);

  const select = getByTestId('native-select');

  fireEvent.select(select, {target: {value: 'Pouet4'}});

  t.is(getByRole('option', {name: 'Pouet2'}).selected, false);
  t.is(getByRole('option', {name: 'Pouet4'}).selected, true);

  unmount();
});

test("should call onChange with the selected options' target value if multiple=true", async t => {
  t.plan(1);

  const handleChange = e => {
    t.deepEqual(e, ['Pouet2', 'Pouet3']);
  };

  const user = userEvent.setup({document});

  const {getByTestId} = render(
    <Select {...defaultFixture.props} onChange={handleChange} multiple />
  );

  try {
    const select = getByTestId('native-select');
    await user.selectOptions(select, 'Pouet3');
  } catch (e) {
    // hitting something like https://github.com/testing-library/user-event/issues/278
    // RangeError: Maximum call stack size exceeded
    if (!e.message.includes('Maximum call stack size exceeded')) {
      throw e;
    }
  }
});
