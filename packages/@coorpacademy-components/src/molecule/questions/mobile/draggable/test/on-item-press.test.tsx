import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionDraggable from '../index.native';

import {Choice} from '../../../types';
import {choices} from '../../switch/test/fixtures/qcm';

test('should handle onItemPress callback', t => {
  const handleItemPress = (choice: Choice) => () => {
    t.is(choice, choices[3]);
  };

  const component = <QuestionDraggable onPress={handleItemPress} choices={choices} />;

  const {getByTestId} = render(component);
  const choice = getByTestId('choice-4-unselected');

  fireEvent.press(choice);

  t.plan(1);
});
