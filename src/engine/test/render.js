import test from 'ava';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import keys from 'lodash/fp/keys';
import forEachEngine from '../../util/for-each-engine';
import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

forEachEngine((name, {h, render}) => {
  test(`${name}: should render vTree`, t => {
    const root = render(document.createElement('div'))(<h1>foo</h1>);
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  test(`${name}: should render vTree with Components`, t => {
    const Component = props => <h1>foo</h1>;
    const root = render(document.createElement('div'))(Component());
    t.is(root.tagName, 'H1');
    t.is(root.textContent, 'foo');
  });

  const props = {
    // style: {
    //   value: {
    //     color: 'blue'
    //   },
    //   assert: (t, el) => {
    //     t.deepEqual(el.style.color, 'blue');
    //   }
    // },
    // className: 'foo',
    // id: 'foo',
    // type: {
    //   tagName: 'input',
    //   value: 'text'
    // },
    'data-foo': 'bar'
  };

  keys(props).forEach(key => {
    const tagName = getOr('div', `${key}.tagName`, props);
    const value = getOr(get(key, props), `${key}.value`, props);
    const assert = getOr((t, el) => {
      t.deepEqual(el.attributes.getNamedItem(key).value, value);
    }, `${key}.assert`, props);

    test.only(`${name}: should render ${key} attribute`, t => {
      const vTree = h(tagName, {
        [key]: value
      });
      const root = render(document.createElement('div'))(vTree);

      assert(t, root);
    });
  });

  const events = {
    click: 'onClick'
  };

  Object.keys(events).forEach(eventName => {
    const attribute = events[eventName];

    test.cb(`${name}: should attach ${eventName} listener`, t => {
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
});
