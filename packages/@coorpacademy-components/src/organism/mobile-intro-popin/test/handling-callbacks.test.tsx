import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import {noop} from 'lodash/fp';
import IntroPopin from '../index.native';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';

const locales = {
  cta: 'CTA',
  description1: 'description1',
  description2: 'description2',
  title: 'title'
};

test('should handle onValidate', t => {
  t.plan(1);

  const handlePress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <IntroPopin isVisible onValidate={handlePress} onCancel={noop} locales={locales} />
  );

  const {getByTestId} = render(component);
  const validateButton = getByTestId('intro-popin-validate-button');

  fireEvent.press(validateButton, mockedGestureEvent);
});

test('should handle onCancel', t => {
  t.plan(1);

  const handleCancel = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <IntroPopin isVisible onCancel={handleCancel} onValidate={noop} locales={locales} />
  );

  const {getByTestId} = render(component);
  const cancelButton = getByTestId('intro-popin-cancel-button');

  fireEvent.press(cancelButton, mockedGestureEvent);
});
