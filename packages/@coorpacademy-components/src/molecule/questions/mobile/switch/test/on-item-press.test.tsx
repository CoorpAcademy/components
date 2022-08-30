import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Switch from '../index.native';
import {answers, choices} from './fixtures/qcm';

test('qcm question › should handle onItemPress', t => {
  const handleItemPress = (value: any) => {
    t.is(value, choices[0]);
  };

  const component = (
    <Switch type="qcm" items={choices} userChoices={answers} onItemPress={handleItemPress} />
  );

  const {getByTestId} = render(component);
  const choice1 = getByTestId('question-choice-1');

  fireEvent.press(choice1);

  t.plan(1);
});
