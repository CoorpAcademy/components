import h from '../../@treantjs/core/h';
import createWidget from '../../@treantjs/core/create-widget';

export default (test, {render, transform}) => {
  test('should create widget without options', t => {
    const Widget = createWidget();
    const update = render(document.createElement('div'));
    const root = update(<Widget/>);

    t.is(root.tagName, 'DIV');
    t.is(root.namespaceURI, 'http://www.w3.org/1999/xhtml');
  });

  test('should create widget with specified tagName', t => {
    const Widget = createWidget({
      tagName: 'span'
    });

    const update = render(document.createElement('div'));
    const root = update(<Widget/>);

    t.is(root.tagName, 'SPAN');
  });

  test('should create widget with specified namespace', t => {
    const Widget = createWidget({
      tagName: 'svg',
      namespaceURI: 'http://www.w3.org/2000/svg'
    });
    const update = render(document.createElement('div'));
    const root = update(<Widget/>);

    t.is(root.tagName, 'svg');
    t.is(root.namespaceURI, 'http://www.w3.org/2000/svg');
  });

  test('should implement initiation', t => {
    t.plan(2);

    const Widget = createWidget({
      init: (props, el) => {
        t.pass();
        el.classList.add('foo');
      }
    });
    const update = render(document.createElement('div'));
    const w = Widget();
    update(w);

    update(w);
    const root = update(w);

    t.truthy(root.classList.contains('foo'));
  });

  test('should call init on other widget class', t => {
    t.plan(2);

    const Widget1 = createWidget({
      init: (props, el) => {
        t.pass();
      }
    });

    const Widget2 = createWidget({
      init: (props, el) => {
        t.pass();
      }
    });

    const update = render(document.createElement('div'));
    update(<Widget1/>);
    update(<Widget1/>);
    update(<Widget2/>);
    update(<Widget2/>);
  });

  test('should pass (props, el) on init', t => {
    t.plan(2);

    let elWidget;
    const Widget = createWidget({
      init: (props, el) => {
        t.deepEqual(props.foo, 'foo');
        elWidget = el;
      }
    });
    const update = render(document.createElement('div'));
    const root = update(<Widget foo="foo"/>);
    t.is(root, elWidget);
  });

  test('should have default destroy', t => {
    const Widget = createWidget();

    const root = document.createElement('div');
    const update = render(root);

    update(<Widget/>);
    update(<span/>);
  });

  test('should implement destroy', t => {
    t.plan(1);

    const Widget = createWidget({
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

  test('should pass (el) on destroy', t => {
    t.plan(1);

    const Widget = createWidget({
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

  test('should implement update', t => {
    t.plan(2);

    const Widget = createWidget({
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

  test('should pass (props, prev, el) on update', t => {
    t.plan(3);

    let elWidget;
    const Widget = createWidget({
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
};
