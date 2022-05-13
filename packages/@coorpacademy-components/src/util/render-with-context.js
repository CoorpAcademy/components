import React from 'react';
import {render} from '@testing-library/react';
import {mockTranslate} from '@coorpacademy/translate';
import Provider from '../atom/provider';

export const renderWithContext = (component, {context, ...renderOptions}) => {
  // uses mockTranslate as a default translate function
  const {translate = mockTranslate, ...rest} = context;

  // eslint-disable-next-line react/prop-types
  const wrapper = ({children}) => (
    <Provider {...rest} translate={translate}>
      {children}
    </Provider>
  );

  return render(component, {
    ...renderOptions,
    wrapper
  });
};
