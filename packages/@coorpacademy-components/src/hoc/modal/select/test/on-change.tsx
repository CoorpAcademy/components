import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import ModalSelect from '../index.native';
import {createSelectChoice} from './fixtures/default';

test('should handle close', t => {
  const handleChange = (event: PressEvent) => {
    t.is(event, 'change-event');
  };

  const select = createSelectChoice({name: 'sel456'});

  const component = (
    <ModalSelect values={select.items || []} onChange={handleChange} testID="change-modal-select" />
  );

  const {getByTestId} = render(component);

  const cpt = getByTestId('modal-select-item-2');

  fireEvent(cpt, 'press', 'modal-select-item-2');

  t.plan(1);
});
