import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import RadioWithTitle from '..';

browserEnv();

test('should call handleChange when radio is checked', t => {
  let checkedValue = false;
  const handleChange = () => {
    checkedValue = !checkedValue;
    t.pass();
  };
  const title = {
    title: '',
    subtitle: '',
    type: 'form-group',
    'data-name': '',
    titleSize: 'small',
    subtitleSize: 'extra-small'
  };
  const dataName = 'input-radio';
  const {container, rerender} = render(
    <RadioWithTitle
      title={title}
      checked={checkedValue}
      onChange={handleChange}
      data-name={dataName}
      aria-label={''}
      name={''}
    />
  );
  const radio = container.querySelector(`[data-name="${dataName}"]`) as Element;
  t.truthy(radio);
  rerender(
    <RadioWithTitle
      title={title}
      checked={checkedValue}
      onChange={handleChange}
      data-name={dataName}
      aria-label={''}
      name={''}
    />
  );
  fireEvent.click(radio);
});
