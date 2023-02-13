import React from 'react';
import PropTypes from 'prop-types';
import {render} from '@testing-library/react';
import has from 'lodash/fp/has';
import {mockTranslate} from '@coorpacademy/translate';
import Provider, {WebContext} from '../atom/provider';

export const renderWithContext = (component, options = {}) => {
  const {context = {}, useLegacyProvider = false, ...renderOptions} = options;
  // uses mockTranslate as a default translate function
  const {translate = mockTranslate, ...rest} = context;

  const wrapper = ({children}) => {
    const hasContextTypes = useLegacyProvider || has(['type', 'contextTypes'], children);
    return hasContextTypes ? (
      <Provider {...rest} translate={translate}>
        {children}
      </Provider>
    ) : (
      <WebContext {...rest} translate={translate}>
        {children}
      </WebContext>
    );
  };

  wrapper.propTypes = {
    children: PropTypes.node
  };

  return render(component, {
    ...renderOptions,
    wrapper
  });
};
