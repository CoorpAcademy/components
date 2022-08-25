import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionSlider, {OnChangeFunction} from '../index.native';

const onSlidingComplete = () => null;

test('should handle on change', t => {
  const VALUE = 11;
  const onChange: OnChangeFunction = value => {
    t.is(value, VALUE);
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

  const cpt = getByTestId('slider');

  fireEvent(cpt, 'onValueChange', VALUE);

  t.plan(1);
});
