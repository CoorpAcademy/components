import {get, getOr} from 'lodash/fp';

import h from '../../@treantjs/core/h';

export default (test, {render, transform}) => {
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
