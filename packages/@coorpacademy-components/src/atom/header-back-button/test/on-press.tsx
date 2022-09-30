import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import HeaderBackButton from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';

test('should react on Press', t => {
  const handlePress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <HeaderBackButton type="close" onPress={handlePress} testID="header-close-button" />
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('header-close-button');

  fireEvent(cpt, 'press', mockedGestureEvent);

  t.plan(1);
});
