import test from 'ava';
import forEachEngine from '../../util/for-each-engine';
import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

forEachEngine((name, {h, render, widget}) => {
  test(`${name}: should create widget without options`, t => {
    const Widget = widget();

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);

    t.is(root.children.length, 1);
    t.is(root.firstElementChild.tagName, 'DIV');
    t.is(root.firstElementChild.namespaceURI, 'http://www.w3.org/1999/xhtml');
  });

  test(`${name}: should create widget with specified tagName`, t => {
    const Widget = widget({
      tagName: 'span'
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);

    t.is(root.children.length, 1);
    t.is(root.firstElementChild.tagName, 'SPAN');
  });

  test(`${name}: should create widget with specified namespace`, t => {
    const Widget = widget({
      tagName: 'svg',
      namespaceURI: 'http://www.w3.org/2000/svg'
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);

    t.is(root.children.length, 1);
    t.is(root.firstElementChild.tagName, 'svg');
    t.is(root.firstElementChild.namespaceURI, 'http://www.w3.org/2000/svg');
  });

  test(`${name}: should implement initiation`, t => {
    t.plan(2);

    const Widget = widget({
      init: (props, el) => {
        t.pass();
        el.classList.add('foo');
      }
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);
    update(<Widget/>);

    t.truthy(root.firstElementChild.classList.contains('foo'));
  });

  test(`${name}: should pass (props, el) on init`, t => {
    t.plan(2);

    let elWidget;
    const Widget = widget({
      init: (props, el) => {
        t.deepEqual(props.foo, 'foo');
        elWidget = el;
      }
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget foo="foo"/>);
    t.is(root.firstElementChild, elWidget);
  });

  test(`${name}: should have default destroy`, t => {
    const Widget = widget();

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);
    update(<span/>);
  });

  test(`${name}: should implement destroy`, t => {
    t.plan(1);

    const Widget = widget({
      destroy: el => {
        t.pass();
      }
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);
    update(<Widget/>);
    update(<span/>);
  });

  test(`${name}: should pass (el) on destroy`, t => {
    t.plan(1);

    const Widget = widget({
      destroy: el => {
        t.is(elWidget, el);
      }
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget foo="foo"/>);
    const elWidget = root.firstElementChild;
    update(<span/>);
  });

  test(`${name}: should implement update`, t => {
    t.plan(2);

    const Widget = widget({
      update: (props, prev, el) => {
        t.pass();
      }
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);
    update(<Widget/>);
    update(<Widget/>);
  });

  test(`${name}: should pass (props, prev, el) on update`, t => {
    t.plan(3);

    let elWidget;
    const Widget = widget({
      update: (props, prev, el) => {
        t.deepEqual(props.foo, 'bar');
        t.deepEqual(prev.foo, 'foo');
        elWidget = el;
      }
    });

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget foo="foo"/>);
    update(<Widget foo="bar"/>);
    t.is(root.firstElementChild, elWidget);
  });
});
