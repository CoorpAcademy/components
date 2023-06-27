import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import RadioWithTitle from '..';

browserEnv();

test('should call handleChange when radio is checked', t => {
  t.plan(2);
  const expectedValues = [false, true];
  const onChange = (value: any) => {
    t.is(value, expectedValues.shift());
  };
  const dataName = 'input-radio';
  const {container} = render(<RadioWithTitle checked onChange={onChange} data-name={dataName} />);
  const radio = container.querySelector(`[data-name="${dataName}"]`);
  console.log(radio);
  t.truthy(radio);

  fireEvent.click(radio);
  t.false(radio.checked);
});