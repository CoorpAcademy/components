import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import ModalSelect from '../index.native';
import {createSelectChoice} from './fixtures/default';

test('should handle close', t => {
  const handlePress = (event: PressEvent) => {
    t.is(event, 'fake-event');
  };

  const select = createSelectChoice({name: 'sel456'});

  const component = <ModalSelect values={select.items || []} onClose={handlePress} />;

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal');

  fireEvent(cpt, 'press', 'fake-event');

  t.plan(1);
});
