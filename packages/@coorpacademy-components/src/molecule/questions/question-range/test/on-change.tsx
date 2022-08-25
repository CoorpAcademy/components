import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionSlider, {OnChangeFunction} from '../index.native';

const onSlidingComplete = () => null;

test('should handle on change', t => {
  const onChange: OnChangeFunction = value => {
    t.is(value, 5);
  };

  const component = (
    <QuestionSlider
      value={0}
      min={100}
      max={10}
      onChange={onChange}
      onSlidingComplete={onSlidingComplete}
      testID="question-slider"
    />
  );

  const {getByTestId} = render(component);

  const cpt = getByTestId('question-slider');

  fireEvent(cpt, 'press', 'question-slider');

  t.plan(1);
});
