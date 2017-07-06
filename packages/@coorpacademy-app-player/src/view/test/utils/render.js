import sinon from 'sinon';
import identity from 'lodash/fp/identity';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Provider from '@coorpacademy/components/es/atom/provider';

const render = vNode => {
  sinon.stub(console, 'error').callsFake(error => {
    throw new Error(error);
  });
  try {
    ReactDOM.renderToStaticMarkup(React.createElement(Provider, {translate: identity}, vNode));
    console.error.restore(); // eslint-disable-line no-console
  } catch (err) {
    console.error.restore(); // eslint-disable-line no-console
    throw err;
  }
};

export default render;
