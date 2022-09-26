import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import Header from '../index.native';
import {TemplateContext} from '../../../template/app-review/template-context';

test('handles onSettingsPress on gear icon', t => {
  const context = mockMobileContext({});

  const onSearchPress = (event: PressEvent) => {
    t.is(event, 'search');
  };
  const onSettingsPress = (event: PressEvent) => {
    t.is(event, 'settings');
  };
  const onLogoLongPress = (event: PressEvent) => {
    t.is(event, 'longPress');
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
  const settingIcon = getByTestId('settings-icon');
  fireEvent(settingIcon, 'press', 'settings');
  t.plan(1);
});
