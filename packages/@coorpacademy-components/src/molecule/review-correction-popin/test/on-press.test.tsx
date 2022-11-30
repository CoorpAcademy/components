import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';
import ReviewCorrectionPopin from '../index.native';
import fixturesRight from './fixtures/right';
import fixturesWrong from './fixtures/wrong';

test('should handle onPress on next button', t => {
  t.plan(1);

  const props = fixturesRight.props;
  const next = {...props.next, onClick: () => t.pass()};

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

test('should handle onPress on button klf', t => {
  const props = fixturesWrong.props;
  const component = (
    <ReviewCorrectionPopin
      type="wrong"
      information={props.information}
      next={props.next}
      resultLabel={props.resultLabel}
      klf={props.klf}
    />
  );
  const {getByTestId} = render(component);

  const buttonKlf = getByTestId('button-klf');
  t.notThrows(() => fireEvent.press(buttonKlf, mockedGestureEvent));
  t.notThrows(() => fireEvent.press(buttonKlf, mockedGestureEvent));
  t.pass();
});
