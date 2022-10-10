import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Search from '..';

browserEnv();

test('should call onChange with new value when user try to change the input value', t => {
  t.plan(1);

  const onChange = value => {
    t.is(value, 'my name is murphy');
  };

  const {container} = render(
    <Search placeholder="say your name" value="my name is murph" onChange={onChange} />
  );

  const input = container.querySelector('[data-name="search-input"]');

  fireEvent.input(input, {target: {value: 'my name is murphy'}});
});
