import React from 'react';
import ReactDOM from 'react-dom/server';
import {mockTranslate} from '@coorpacademy/translate';
import {Provider} from '@coorpacademy/components';

const render = vNode => {
  ReactDOM.renderToStaticMarkup(React.createElement(Provider, {translate: mockTranslate}, vNode));
};

export default render;
