import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Checkbox from '..';

browserEnv();

test('should call the onChange function and toggle the value on change', t => {
  t.plan(6);
  const expectedOnChangeValues = [false, true];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const dataName = 'check-box';
  const {container} = render(<Checkbox checked onChange={onChange} data-name={dataName} />);

  const checkBox = container.querySelector(`[data-name="${dataName}"]`);
  t.truthy(checkBox);

  t.true(checkBox.checked);

  fireEvent.click(checkBox);
  t.false(checkBox.checked);

  fireEvent.click(checkBox);
  t.true(checkBox.checked);
});

test('should mount the checkbox with default values', t => {
  const dataName = 'check-box';
  const {container} = render(<Checkbox data-name={dataName} />);

  const checkBox = container.querySelector(`[data-name="${dataName}"]`);
  t.truthy(checkBox);
});
