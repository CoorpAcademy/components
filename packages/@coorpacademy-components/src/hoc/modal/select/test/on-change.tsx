import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import ModalSelect from '../index.native';

test('should handle close', t => {
  const handleChange = (event: PressEvent) => {
    t.is(event, 'change-event');
  };

  const component = <ModalSelect onChange={handleChange} testID="change-modal-select" />;

  const {getByTestId} = render(component);
  const cpt = getByTestId('modal-select-item-2');

  fireEvent(cpt, 'press', 'modal-select-item-2');

  t.plan(1);
});
