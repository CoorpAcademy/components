import test from 'ava';
import React from 'react';
import {NativeTouchEvent} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import ModalSelectItem from '../index.native';

test('should handle press', t => {
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
    <ModalSelectItem onPress={handlePress} testID="modal-select-item-1">
      Foo
    </ModalSelectItem>
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('modal-select-item-1');

  fireEvent(cpt, 'press', fakeEvent);

  t.plan(1);
});
