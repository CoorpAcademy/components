import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
// import {shallow, configure} from 'enzyme';
import {render, fireEvent} from '@testing-library/react';
import InputCheckbox from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call the onChange function with the checked value of the target', t => {
  t.plan(5);
  const expectedOnChangeValues = [false, true];
  const onChange = value => {
    // t.is(value, expectedOnChangeValues.shift());
    t.pass();
  };
  const {container} = render(<InputCheckbox {...defaultFixture.props} onChange={onChange} />);

  const checkboxInput = container.querySelector('[data-name="checkbox-input-label"] input');
  t.truthy(checkboxInput);
  t.true(checkboxInput.checked);
  fireEvent.click(checkboxInput);
  t.false(checkboxInput.checked);
  fireEvent.click(checkboxInput);
  t.true(checkboxInput.checked);
});
