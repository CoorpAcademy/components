import test from 'ava';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import mockMobileContext from '../../../test/helpers/mock-mobile-context';
import Html from '../index.native';
import {TemplateContext} from '../../../template/app-review/template-context';

test('should handle onLinkPress', t => {
  const context = mockMobileContext({
    logEvent: () => t.pass(),
    vibrate: () => t.pass()
  });

  const handleLinkPress = () => t.pass();

  const component = (
    <TemplateContext values={context}>
      <Html fontSize={20} onLinkPress={handleLinkPress}>
        {`<a href="https://domain.tld"></a>`}
      </Html>
      ;
    </TemplateContext>
  );

  const {getByTestId} = render(component);
  const htmlBase = getByTestId('html-base');

  fireEvent.press(htmlBase);

  t.plan(2);
});
