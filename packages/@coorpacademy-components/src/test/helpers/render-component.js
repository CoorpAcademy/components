import React from 'react';
import ReactDOM from 'react-dom/server';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import {mockTranslate} from '@coorpacademy/translate';
import {render} from '@testing-library/react-native';
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

const renderNativeComponent = (t, Component, fixture) => {
  const {toJSON} = render(<Component {...fixture.props} />);
  const json = toJSON();

  if (Array.isArray(json)) {
    json.forEach(el => t.is(get('type', el), 'react-native-mock'));
  } else {
    t.is(get('type', json), 'react-native-mock');
  }
};

const wrappingComponent = ({children}) => <Provider {...context}>{children}</Provider>;

wrappingComponent.propTypes = {
  children: PropTypes.node
};

export {renderComponent, renderNativeComponent, wrappingComponent};
