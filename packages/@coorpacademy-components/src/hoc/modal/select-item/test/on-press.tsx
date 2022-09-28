import test from 'ava';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import ModalSelectItem from '../index.native';
import mockedGestureEvent from '../../../../test/helpers/mocked-gesture-event';

test('should handle press', t => {
  const handlePress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <ModalSelectItem onPress={handlePress} testID="modal-select-item-1">
      Foo
    </ModalSelectItem>
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('modal-select-item-1');

  fireEvent(cpt, 'press', mockedGestureEvent);

  t.plan(1);
});
