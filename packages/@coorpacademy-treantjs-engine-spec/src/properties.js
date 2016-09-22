import {get, getOr} from 'lodash/fp';
import {h} from '@coorpacademy/treantjs-core';

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
      const container = document.createElement('div');
      const update = render(container);
      const vTree = h(tagName, {
        [key]: value
      });

      const el = update(vTree);
      assert(t, el);
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
      const container = document.createElement('div');
      const update = render(container);
      const vTree = <div {...{[attribute]: onEvent}}/>;
      const el = update(vTree);

      document.body.appendChild(el);
      const customEvent = document.createEvent('Event');
      customEvent.initEvent(eventName, true, true);
      el.dispatchEvent(customEvent);
    });
  });
};
