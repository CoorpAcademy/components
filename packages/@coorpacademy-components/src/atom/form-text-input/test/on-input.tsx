import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import FormTextInput from '..';
import {FieldValue, FormTextInputProps} from '../prop-types';
import emailFixture from './fixtures/email';
import passwordConfirmationFixture from './fixtures/password-confirmation';

browserEnv();

test('should trigger handleInputChange and validate another input', t => {
  t.plan(10);

  let value: FieldValue = emailFixture.props.value;

  let onError = false;

  const props: FormTextInputProps = {
    ...emailFixture.props,
    'data-testid': 'email-testid-change',
    onChange: (newVal, isValid) => {
      value = newVal;
      onError = !isValid;
      t.pass();
    }
  };

  const {container} = render(<FormTextInput {...props} />);

  const input = container.querySelector(`[data-testid="${props['data-testid']}"]`);
  t.truthy(input);

  t.is(value, 'phyneas@summer.com');

  fireEvent.input(input as Element, {target: {value: 'invalid-email-evil.com'}});

  // invalid email
  t.is(value, 'invalid-email-evil.com');

  t.true(onError);

  fireEvent.input(input as Element, {target: {value: 'perry.the.platypus@summer.com'}});

  // valid email
  t.is(value, 'perry.the.platypus@summer.com');

  t.false(onError);

  t.pass();
});

test('should trigger handleInputChange and validate (with length) for password confirmation input', t => {
  t.plan(14);

  let value: FieldValue = passwordConfirmationFixture.props.value;

  let onError = false;

  const props: FormTextInputProps = {
    ...passwordConfirmationFixture.props,
    'data-testid': 'password-testid-change',
    onChange: (newVal, isValid) => {
      value = newVal;
      onError = !isValid;
      t.pass();
    }
  };

  const {container} = render(<FormTextInput {...props} />);

  const input = container.querySelector(`[data-testid="${props['data-testid']}"]`);
  t.truthy(input);

  t.is(value, '1234567890what-a-password');

  t.false(onError);

  fireEvent.input(input as Element, {target: {value: 'fail'}});

  // invalid length
  t.is(value, 'fail');

  t.true(onError);

  fireEvent.input(input as Element, {target: {value: 'some-ok-password'}});

  // valid length
  t.is(value, 'some-ok-password');

  // but invalid equals
  t.true(onError);

  fireEvent.input(input as Element, {target: {value: '1234567890what-a-password'}});

  // valid length
  t.is(value, '1234567890what-a-password');

  // valid equals
  t.false(onError);

  t.pass();
});
