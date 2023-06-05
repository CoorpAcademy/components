import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Autocomplete from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call the onChange and onClear functions with the new value of the input', t => {
  t.plan(3);

  const onChange = e => {
    t.is(e.target.value, 'Foo');
  };

  const onClear = () => {
    t.pass();
  };

  const inputProps = {
    placeholder: '',
    value: '',
    onChange,
    'data-testid': 'autocomplete-input'
  };

  const defaultProps = {
    ...defaultFixture.props,
    onClear
  };
  const {getByTestId} = render(
    <Autocomplete
      {...{
        ...defaultProps,
        ...inputProps
      }}
    />
  );
  const inputAutocomplete = getByTestId('autocomplete-input');
  t.truthy(inputAutocomplete);

  fireEvent.input(inputAutocomplete, {target: {value: 'Foo'}});
  fireEvent.blur(inputAutocomplete);
});
