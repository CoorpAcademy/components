import React from 'react';
import PropTypes from 'prop-types';
import {render} from '@testing-library/react';
import {mockTranslate} from '@coorpacademy/translate';
import {WebContext} from '../atom/provider';

export const renderWithContext = (component, options = {}) => {
  const {context = {}, ...renderOptions} = options;
  // uses mockTranslate as a default translate function
  const {translate = mockTranslate, ...rest} = context;

  const wrapper = ({children}) => (
    <WebContext {...rest} translate={translate}>
      {children}
    </WebContext>
  );

  wrapper.propTypes = {
    children: PropTypes.node
  };

  return render(component, {
    ...renderOptions,
    wrapper
  });
};
