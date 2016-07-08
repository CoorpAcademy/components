import jsdom from 'jsdom';
import {get, getOr} from 'lodash/fp';

import h from '../../@treantjs/core/h';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

const engineSpec = (test, {render, transform}) => {
  test('should render vTree', t => {
    const root = render(document.createElement('div'))(<h1>foo</h1>);
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  test('should render vTree with Components', t => {
    const Component = props => <h1>foo</h1>;
    const root = render(document.createElement('div'))(Component());
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  test('should update rendering', t => {
    const root = document.createElement('div');
    const update = render(root);

    const h1 = update(<h1/>);
    t.is(h1.tagName, 'H1');

    const h2 = update(<h2/>);
    t.is(h2.tagName, 'H2');
  });

  const props = {
    style: {
      value: {
        color: 'blue'
      },
      assert: (t, el) => {
        t.deepEqual(el.style.color, 'blue');
      }
    },
    className: 'foo',
    id: 'foo',
    type: {
      tagName: 'input',
      value: 'text'
    }
  };

  Object.keys(props).forEach(key => {
    const prop = get(key, props);

    const tagName = getOr('div', 'tagName', prop);
    const value = getOr(prop, 'value', prop);
    const assert = getOr((t, el) => {
      t.deepEqual(get(key, el), value);
    }, 'assert', prop);

    test(`should render ${key} attribute`, t => {
      const root = render(document.createElement('div'))(h(tagName, {
        [key]: value
      }));
      assert(t, root);
    });
  });

  const events = {
    click: 'onClick'
  };

  Object.keys(events).forEach(eventName => {
    const attribute = events[eventName];

    test.cb(`should attch ${eventName} listener`, t => {
      t.plan(1);
      const onEvent = e => {
        t.pass();
        t.end();
      };

      const root = render(document.createElement('div'))(<div {...{[attribute]: onEvent}}/>);
      window.document.body.appendChild(root);
      const event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      root.dispatchEvent(event);
    });
  });
};

export default engineSpec;
