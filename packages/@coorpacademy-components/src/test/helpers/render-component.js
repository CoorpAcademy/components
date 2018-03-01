import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mockTranslate} from '@coorpacademy/translate';
import Provider from '../../atom/provider';

configure({adapter: new Adapter()});

const context = {
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

  return shallow(wrappedVTree);
};

export default renderComponent;
