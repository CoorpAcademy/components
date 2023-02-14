import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Slide from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';
import fixtures from './fixtures/initial-state';

test('should handle onPress on validate button', async t => {
  t.plan(1);

  const props = fixtures.props;
  const validateButton = {...props.validateButton, onClick: () => t.pass()};

  const component = <Slide {...props} slideIndex={'0'} num={0} validateButton={validateButton} />;

  const {getByTestId} = render(component);

  const buttonValidate = getByTestId('slide-validate-button-0');

  fireEvent.press(buttonValidate, mockedGestureEvent);

  // wait for onclick to be triggered
  await new Promise(resolve => {
    setTimeout(resolve, 50);
  });
});
