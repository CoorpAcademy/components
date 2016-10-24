import pipe from 'lodash/fp/pipe';
import jsdom from 'jsdom';
import testProperties from './properties';
import testRender from './render';

const engineSpec = (test, engine) => {
  test.before(() => {
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
  });
  testRender(test, engine);
  testProperties(test, engine);
};

export default engineSpec;
