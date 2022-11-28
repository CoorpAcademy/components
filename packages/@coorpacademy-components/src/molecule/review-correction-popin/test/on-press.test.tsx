import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';
import ReviewCorrectionPopin from '../index.native';
import fixturesRight from './fixtures/right';

test('should handle onPress on next button', t => {
  t.plan(1);

  const onClick = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const props = fixturesRight.props;
  const next = {...props.next, onClick};

  const component = (
    <ReviewCorrectionPopin
      type="right"
      information={props.information}
      next={next}
      resultLabel={props.resultLabel}
    />
  );

  const {getByTestId} = render(component);
  const buttonNext = getByTestId('next-question-button');

  fireEvent.press(buttonNext, mockedGestureEvent);
});
