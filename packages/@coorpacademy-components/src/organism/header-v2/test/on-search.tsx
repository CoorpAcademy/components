import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {GestureResponderEvent} from 'react-native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import Header from '../index.native';
import {TemplateContext} from '../../../template/app-review/template-context';
import mockedGestureEvent from '../../../test/helpers/mocked-gesture-event';

test('handles onSearchPress on magnifier icon', t => {
  const context = mockMobileContext({
    brandTheme: {
      images: {
        'logo-mobile':
          'https://static.coorpacademy.com/content/mobile/raw/coorp_logo_infinite-1552063832916.png'
      }
    }
  });

  const onSearchPress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };
  const onSettingsPress = (event: GestureResponderEvent) => {
    t.is(event, mockedGestureEvent);
  };
  const onLogoLongPress = () => {
    t.pass();
  };

  const component = (
    <TemplateContext values={context}>
      <Header
        onSearchPress={onSearchPress}
        onSettingsPress={onSettingsPress}
        onLogoLongPress={onLogoLongPress}
      />
      ;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const searchIcon = getByTestId('search-icon');
  fireEvent(searchIcon, 'press', mockedGestureEvent);
  t.plan(1);
});
