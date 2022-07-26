import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import InputSwitch from '..';
import defaultFixture from './fixtures/checked';

browserEnv();

test('should call the onChange function with the checked value of the target', t => {
  t.plan(4);
  const expectedOnChangeValues = [false, true];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const {container, rerender} = render(
    <InputSwitch {...defaultFixture.props} onChange={onChange} />
  );

  const inputSwitch = container.querySelector('[data-name="input-switch-label"]');
  t.truthy(inputSwitch);

  fireEvent.click(inputSwitch);

  rerender(<InputSwitch {...defaultFixture.props} onChange={onChange} value={false} />);

  t.truthy(inputSwitch);

  fireEvent.click(inputSwitch);
});
