import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import {TemplateContext} from '../../../template/app-review/template-context';
import HeaderBackButton from '../index.native';

test('should react on Press', t => {
  const context = mockMobileContext({
    logEvent: () => t.pass(),
    vibrate: () => t.pass()
  });
  const handlePress = () => t.pass();

  const component = (
    <TemplateContext values={context}>
      <HeaderBackButton onPress={handlePress} testID="header-close-button" />;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const cpt = getByTestId('header-close-button');

  fireEvent.press(cpt);

  t.plan(3);
});
