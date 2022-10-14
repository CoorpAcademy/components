import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import PodcastIntroPopin from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';

test('should handle onValidate', t => {
  t.plan(1);

  const handlePress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = <PodcastIntroPopin isVisible onValidate={handlePress} />;

  const {getByTestId} = render(component);
  const validateButton = getByTestId('podcast-popin-intro-validate-button');

  fireEvent.press(validateButton, mockedGestureEvent);
});
