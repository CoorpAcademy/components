import React from 'react';
import ReactDOM from 'react-dom/server';
import identity from 'lodash/fp/identity';
import Provider from '../../atom/provider';

const context = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: identity
};

const renderComponent = (t, Component, fixture) => {
  t.true(
    undefined !== fixture.props || undefined !== fixture.children,
    'fixture should have props or children'
  );

  const vTree = (
    <Component {...fixture.props}>
      {fixture.children}
    </Component>
  );

  const wrappedVTree = (
    <Provider {...context}>
      {vTree}
    </Provider>
  );

  return ReactDOM.renderToStaticMarkup(wrappedVTree);
};

export default renderComponent;
