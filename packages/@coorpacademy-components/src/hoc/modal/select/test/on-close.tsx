import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import ModalSelect from '../index.native';

test('should handle close', t => {
  const handlePress = (event: PressEvent) => {
    t.is(event, 'fake-event');
  };

  const component = <ModalSelect onClose={handlePress} testID="close-modal-select" />;

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal-select');

  fireEvent(cpt, 'press', 'fake-event');

  t.plan(1);
});
