import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionSlider, {OnSlidingCompleteFunction} from '../index.native';

test('should trigger value on sliding complete', t => {
  const VALUE = 11;
  const onSlidingComplete: OnSlidingCompleteFunction = value => {
    t.is(value, VALUE);
  };

  const component = (
    <QuestionSlider
      value={0}
      min={100}
      max={10}
      onSlidingComplete={onSlidingComplete}
      testID="question-slider"
    />
  );

  const {getByTestId} = render(component);
  const slider = getByTestId('slider');

  fireEvent(slider, 'onValueChange', VALUE);
  fireEvent(slider, 'onSlidingComplete');

  t.plan(1);
});
