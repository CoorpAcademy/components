import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import RadioWithTitle from '..';

browserEnv();

test('should call handleChange when radio is checked', t => {
  const expectedValues = [false, true];
  const onChange = (value: any) => {
    t.is(value, expectedValues.shift());
  };
  const title = {};
  const dataName = 'input-radio';
  const {container} = render(
    <RadioWithTitle
      title={title}
      checked
      onChange={onChange}
      data-name={dataName}
      aria-label={''}
      name={''}
    />
  );
  console.log(container);
  const radio = container.querySelector(`[data-name="${dataName}"]`);
  t.truthy(radio);
  fireEvent.click(radio);
  t.false(radio.checked);
});
