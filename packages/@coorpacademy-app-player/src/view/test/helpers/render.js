import identity from 'lodash/fp/identity';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Provider from '@coorpacademy/components/es/atom/provider';

const render = vNode => {
  ReactDOM.renderToStaticMarkup(React.createElement(Provider, {translate: identity}, vNode));
};

export default render;
