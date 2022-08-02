import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import ModalSelectItem from '../index.native';

test('should handle press', t => {
  const handlePress = (event: PressEvent) => {
    t.is(event, 'fake-event');
  };

  const component = (
    <ModalSelectItem onPress={handlePress} testID="modal-select-item-1">
      Foo
    </ModalSelectItem>
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('modal-select-item-1');

  fireEvent(cpt, 'press', 'fake-event');

  t.plan(1);
});
