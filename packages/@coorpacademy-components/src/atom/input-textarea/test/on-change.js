import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {omit} from 'lodash/fp';
import {fireEvent, render} from '@testing-library/react';
import InputTextarea from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call the onChange function with the value of the target', t => {
  t.plan(1);
  const onChange = value => {
    t.is(value, 'newvalue');
  };

  const {getByTestId, unmount} = render(
    <InputTextarea {...defaultFixture.props} name="textarea-test" onChange={onChange} />
  );

  fireEvent.change(getByTestId('textarea-test'), {target: {value: 'newvalue'}});
  unmount();
});

test('should not crash if the onChange function has not been specified', t => {
  const {getByTestId, unmount} = render(
    <InputTextarea {...omit('onChange', defaultFixture.props)} name="textarea-test" />
  );

  t.notThrows(() => {
    fireEvent.change(getByTestId('textarea-test'), {target: {value: 'newvalue'}});
  });
  unmount();
});
