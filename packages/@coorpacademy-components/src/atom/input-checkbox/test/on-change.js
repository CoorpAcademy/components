import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import InputCheckbox from '..';
import defaultFixture from './fixtures/default';

browserEnv({pretendToBeVisual: true});

test('should call the onChange function with the checked value of the target', t => {
  t.plan(4);
  const expectedOnChangeValues = [true, false];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const {container, rerender} = render(
    <InputCheckbox {...defaultFixture.props} onChange={onChange} />
  );

  const checkbox = container.querySelector('[data-name="checkbox-label"] svg');
  t.truthy(checkbox);

  fireEvent.click(checkbox);

  rerender(<InputCheckbox {...defaultFixture.props} onChange={onChange} checked />);

  t.truthy(checkbox);

  fireEvent.click(checkbox);
});
