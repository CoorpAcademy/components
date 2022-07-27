import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {Text} from 'react-native';
import Modal from '../index.native';

test('should handle close', t => {
  const handlePress = (event: PressEvent) => {
    t.is(event, 'fake-event');
  };

  const component = (
    <Modal onClose={handlePress}>
      <Text>Some content</Text>
    </Modal>
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal');

  fireEvent(cpt, 'press', 'fake-event');

  t.plan(1);
});
