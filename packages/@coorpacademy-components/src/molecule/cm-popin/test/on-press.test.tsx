import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuitPopinReview from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';
import {QuitPopinButton} from '../types';
import fixturesReviewQuit from './fixtures/on-review-quit';

test('should handle onPress on first button', t => {
  t.plan(1);

  const props = fixturesReviewQuit.props;
  const firstButtonProps = {
    ...props.firstButton,
    handleOnclick: () => t.pass()
  } as QuitPopinButton;

  const component = (
    <QuitPopinReview
      content={props.content}
      descriptionText={props.descriptionText}
      firstButton={firstButtonProps}
      secondButton={props.secondButton}
      icon={props.icon}
      mode={props.mode}
    />
  );

  const {getByTestId} = render(component);
  const firstButton = getByTestId('first-button');
  fireEvent.press(firstButton, mockedGestureEvent);
});

test('should handle onPress on second button', t => {
  t.plan(1);

  const props = fixturesReviewQuit.props;
  const secondButtonProps = {
    ...props.secondButton,
    handleOnclick: () => t.pass()
  } as QuitPopinButton;

  const component = (
    <QuitPopinReview
      content={props.content}
      descriptionText={props.descriptionText}
      firstButton={props.firstButton}
      secondButton={secondButtonProps}
      icon={props.icon}
      mode={props.mode}
    />
  );

  const {getByTestId} = render(component);
  const secondButton = getByTestId('second-button');
  fireEvent.press(secondButton, mockedGestureEvent);
});
