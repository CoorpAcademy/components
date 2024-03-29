import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import {
  NovaCompositionCoorpacademyClockTime as ClockIcon,
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaCompositionCoorpacademySearch as SearchIcon
} from '@coorpacademy/nova-icons';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';
import NavigationBar from '../index.native';

test('should handle onPress', t => {
  t.plan(1);

  const action = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };

  const component = (
    <NavigationBar
      items={[
        {label: 'Home', icon: HomeIcon, action},
        {label: 'Search', icon: SearchIcon, action},
        {label: 'Revision', icon: ClockIcon, action}
      ]}
      selectedItemIndex={2}
    />
  );
  const {getByTestId} = render(component);
  const buttonRevision = getByTestId('navigationButton_2');

  fireEvent.press(buttonRevision, mockedGestureEvent);
});
