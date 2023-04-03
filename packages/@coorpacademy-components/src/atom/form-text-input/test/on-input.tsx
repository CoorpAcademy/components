import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import FormTextInput from '..';
import {FieldValue, FormTextInputProps} from '../prop-types';
import emailFixture from './fixtures/email';
import passwordConfirmationFixture from './fixtures/password-confirmation';
import passwordIncompleteFixture from './fixtures/password-no-validator-fail';

browserEnv();

test('should trigger handleInputChange and validate another input', t => {
  t.plan(9);

  let value: FieldValue = emailFixture.props.value;

  let isValid: boolean | undefined = true;

  const props: FormTextInputProps = {
    ...emailFixture.props,
    'data-testid': 'email-testid-change',
    onChange: (newVal, _isValid) => {
      value = newVal;
      isValid = _isValid;
      t.pass();
    },
    isValid
  };

  const {container} = render(<FormTextInput {...props} />);

  const input = container.querySelector(`[data-testid="${props['data-testid']}"]`);
  t.truthy(input);

  t.is(value, 'phyneas@summer.com');

  fireEvent.input(input as Element, {target: {value: 'invalid-email-evil.com'}});

  // invalid email
  t.is(value, 'invalid-email-evil.com');

  t.false(isValid);

  fireEvent.input(input as Element, {target: {value: 'perry.the.platypus@summer.com'}});

  // valid email
  t.is(value, 'perry.the.platypus@summer.com');

  t.true(isValid);

  t.pass();
});

test('should trigger handleInputChange and validate (with length) for password confirmation input', t => {
  t.plan(13);

  let value: FieldValue = passwordConfirmationFixture.props.value;

  let isValid: boolean | undefined = true;

  const props: FormTextInputProps = {
    ...passwordConfirmationFixture.props,
    'data-testid': 'password-testid-change',
    onChange: (newVal, _isValid) => {
      value = newVal;
      isValid = _isValid;
      t.pass();
    },
    isValid
  };

  const {container} = render(<FormTextInput {...props} />);

  const input = container.querySelector(`[data-testid="${props['data-testid']}"]`);
  t.truthy(input);

  t.is(value, '1234567890what-a-password');

  t.true(isValid);

  fireEvent.input(input as Element, {target: {value: 'fail'}});

  // invalid length
  t.is(value, 'fail');

  t.false(isValid);

  fireEvent.input(input as Element, {target: {value: 'some-ok-password'}});

  // valid length
  t.is(value, 'some-ok-password');

  // but invalid equals
  t.false(isValid);

  fireEvent.input(input as Element, {target: {value: '1234567890what-a-password'}});

  // valid length
  t.is(value, '1234567890what-a-password');

  // valid equals
  t.true(isValid);

  t.pass();
});

test('should trigger handleInputChange and not validate for password input when no validator function is provided', t => {
  t.plan(13);

  let value: FieldValue = passwordIncompleteFixture.props.value;

  let isValid: boolean | undefined = false;

  const props: FormTextInputProps = {
    ...passwordIncompleteFixture.props,
    'data-testid': 'password-testid-change',
    onChange: (newVal, _isValid) => {
      value = newVal;
      isValid = _isValid;
      t.pass();
    },
    isValid
  };

  const {container} = render(<FormTextInput {...props} />);

  const input = container.querySelector(`[data-testid="${props['data-testid']}"]`);
  t.truthy(input);

  t.is(value, '1234567890what-a-password');

  t.false(isValid);

  fireEvent.input(input as Element, {target: {value: 'fail'}});

  // invalid length
  t.is(value, 'fail');

  t.false(isValid);

  fireEvent.input(input as Element, {target: {value: 'some-ok-password'}});

  // valid length
  t.is(value, 'some-ok-password');

  // but invalid equals
  t.false(isValid);

  fireEvent.input(input as Element, {target: {value: '1234567890what-a-password'}});

  // valid length
  t.is(value, '1234567890what-a-password');

  // valid equals but if no validator function for the password is provided, it defaults to false
  t.false(isValid);

  t.pass();
});
