import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionSlider, {OnChangeFunction} from '../index.native';
import {fixture} from './fixtures/default.ts';

test('should handle on change', t => {
  const onChange: OnChangeFunction = value => {
    t.is(value, 5);
  };

  const {value, max, min, onSlidingComplete} = fixture.props;

  const component = (
    <QuestionSlider
      value={value}
      min={min}
      max={max}
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
