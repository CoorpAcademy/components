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
  const buttonSubmit = container.querySelector('button[type="submit"]');
  t.truthy(buttonSubmit);
  fireEvent.click(buttonSubmit as Element);
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
  const buttonReset = container.querySelector('button[type="reset"]');
  t.truthy(buttonReset);
  fireEvent.click(buttonReset as Element);
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

test('should submit form with a specific button for "Coorpmanager" theme', t => {
  t.plan(2);
  const props = {
    groups: [{fields: []}],
    onSubmit: once(() => {
      t.pass();
    }),
    submitValue: 'Save changes',
    isModified: true,
    theme: 'coorpmanager'
  };
  const {container} = render(<BrandForm {...props} />);
  const inputSubmit = container.querySelector('[data-testid="submit-button"]');
  t.truthy(inputSubmit);
  fireEvent.click(inputSubmit as Element);
});
