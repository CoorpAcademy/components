import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent, Text} from 'react-native';
import Modal from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';

test('should handle close', t => {
  const handlePress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <Modal onClose={handlePress}>
      <Text>Some content</Text>
    </Modal>
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('close-modal');

  fireEvent(cpt, 'press', mockedGestureEvent);

  t.plan(1);
});
