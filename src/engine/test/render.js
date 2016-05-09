import test from 'ava';
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
    const tagName = props[key] && props[key].tagName || 'div';
    const value = props[key] && props[key].value || props[key];
    const assert = props[key].assert || ((t, el) => {
      t.deepEqual(el[key], value);
    });

    test(`${name}: should render ${key} attribute`, t => {
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
