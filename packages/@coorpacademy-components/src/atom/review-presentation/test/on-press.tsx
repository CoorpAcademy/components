import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import Onboarding from '../index.native';
import {TemplateContext} from '../../../template/app-review/template-context';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';

test('handles onPress on button', t => {
  const context = mockMobileContext({});

  const onPress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <TemplateContext values={context}>
      <Onboarding onPress={onPress} />;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const button = getByTestId('button-quit-revision-onboarding');
  fireEvent(button, 'press', mockedGestureEvent);
  t.plan(1);
});
