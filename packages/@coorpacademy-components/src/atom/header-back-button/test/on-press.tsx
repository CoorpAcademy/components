import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NativeTouchEvent} from 'react-native';
import HeaderBackButton from '../index.native';

test('should react on Press', t => {
  const fakeEvent: NativeTouchEvent = {
    changedTouches: [],
    identifier: 'fake',
    locationX: 0,
    locationY: 0,
    pageX: 0,
    pageY: 0,
    target: '',
    timestamp: 0,
    touches: []
  };

  const handlePress = (event: NativeTouchEvent) => {
    t.is(event, fakeEvent);
  };

  const component = (
    <HeaderBackButton type="close" onPress={handlePress} testID="header-close-button" />
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('header-close-button');

  fireEvent(cpt, 'press', fakeEvent);

  t.plan(1);
});
