import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ReviewHeader from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';
import defaultFixture from './fixtures/all-questions-ok';

test('should handle onPress on button', t => {
  t.plan(1);

  const props = {
    ...defaultFixture.props,
    onQuitClick: () => t.pass()
  };

  const component = <ReviewHeader {...props} />;

  const {getByTestId} = render(component);
  const openPopinButton = getByTestId('open-popin-button');

  fireEvent.press(openPopinButton, mockedGestureEvent);
});
