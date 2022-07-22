import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import HeaderBackButton from '../index.native';

test('should react on Press', t => {
  const handlePress = (event: PressEvent) => {
    t.is(event, 'fake-event');
  };

  const component = (
    <HeaderBackButton type="close" onPress={handlePress} testID="header-close-button" />
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('header-close-button');

  fireEvent(cpt, 'press', 'fake-event');

  t.plan(1);
});
