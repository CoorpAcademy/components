import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import {h} from '@coorpacademy/treantjs-core';

export default (test, {render, transform}) => {
  const props = {
    style: {
      value: {
        color: 'blue'
      },
      assert: (deepEqual, el) => {
        deepEqual(el.style.color, 'blue');
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
    const assert = getOr((deepEqual, el) => {
      deepEqual(get(key, el), value);
    }, 'assert', prop);

    test(`should render ${key} attribute`, t => {
      const update = pipe(
        transform,
        render(document.createElement('div'))
      );
      const el = update(h(tagName, {
        [key]: value
      }));
      assert(
        (...argz) => t.deepEqual(...argz),
        el
      );
    });
  });

  const events = {
    click: 'onClick'
  };

  Object.keys(events).forEach(eventName => {
    const attribute = events[eventName];

    test.cb(`should attach ${eventName} listener`, t => {
      t.plan(1);
      const onEvent = e => {
        t.pass();
        t.end();
      };

      const update = pipe(
        transform,
        render(document.createElement('div'))
      );
      const root = update(<div {...{[attribute]: onEvent}}/>);
      window.document.body.appendChild(root);
      const event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      root.dispatchEvent(event);
    });
  });
};
