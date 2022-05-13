import React from 'react';
import PropTypes from 'prop-types';
import {render} from '@testing-library/react';
import {mockTranslate} from '@coorpacademy/translate';
import Provider from '../atom/provider';

export const renderWithContext = (component, {context, ...renderOptions}) => {
  // uses mockTranslate as a default translate function
  const {translate = mockTranslate, ...rest} = context;

  const wrapper = ({children}) => (
    <Provider {...rest} translate={translate}>
      {children}
    </Provider>
  );

  wrapper.propTypes = {
    children: PropTypes.node
  };

  return render(component, {
    ...renderOptions,
    wrapper
  });
};
