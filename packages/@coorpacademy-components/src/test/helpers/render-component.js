import React from 'react';
import ReactDOM from 'react-dom/server';
import PropTypes from 'prop-types';
import {mockTranslate} from '@coorpacademy/translate';
import Provider from '../../atom/provider';

export const context = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: mockTranslate
};

const renderComponent = (t, Component, fixture) => {
  t.true(
    undefined !== fixture.props || undefined !== fixture.children,
    'fixture should have props or children'
  );

  const vTree = <Component {...fixture.props}>{fixture.children}</Component>;

  const wrappedVTree = <Provider {...context}>{vTree}</Provider>;

  return ReactDOM.renderToStaticMarkup(wrappedVTree);
};

export const wrappingComponent = ({children}) => <Provider {...context}>{children}</Provider>;

wrappingComponent.propTypes = {
  children: PropTypes.node
};

export default renderComponent;
