import jsdom from 'jsdom';

import testRender from './render';
import testProperties from './properties';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

const engineSpec = (...argz) => {
  testProperties(...argz);
  testRender(...argz);
};

export default engineSpec;
