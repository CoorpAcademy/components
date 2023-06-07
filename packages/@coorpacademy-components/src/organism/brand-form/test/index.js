import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {once} from 'lodash/fp';
import BrandForm from '..';

browserEnv();

test('should submit form', t => {
  t.plan(2);
  const props = {
    groups: [],
    onSubmit: once(() => {
      t.pass();
    }),
    submitValue: 'save',
    isModified: true
  };
  const {container} = render(<BrandForm {...props} />);
  const inputSubmit = container.querySelector('input[type="submit"]');
  t.truthy(inputSubmit);
  fireEvent.click(inputSubmit);
});

test('should reset form', t => {
  t.plan(2);
  const props = {
    groups: [],
    onReset: once(() => {
      t.pass();
    }),
    resetValue: 'reset',
    isModified: true
  };
  const {container} = render(<BrandForm {...props} />);
  const inputReset = container.querySelector('input[type="reset"]');
  t.truthy(inputReset);
  fireEvent.click(inputReset);
});

test('should not build any button if there are no values onSubmit or onReset', t => {
  t.plan(2);
  const props = {
    groups: [],
    isModified: true
  };
  const {container} = render(<BrandForm {...props} />);
  const inputReset = container.querySelector('input[type="reset"]');
  t.falsy(inputReset);
  const inputSubmit = container.querySelector('input[type="submit"]');
  t.falsy(inputSubmit);
});

test('should submit form with a specific button for "Massive Battle" form', t => {
  t.plan(2);
  const props = {
    groups: [{fields: []}],
    onSubmit: once(() => {
      t.pass();
    }),
    submitValue: 'Save changes',
    isModified: true,
    type: 'massive battle'
  };
  const {container} = render(<BrandForm {...props} />);
  const buttonSubmit = container.querySelector('[data-name="submit-button"]');
  t.truthy(buttonSubmit);
  fireEvent.click(buttonSubmit);
});
