import h from '../../@treantjs/core/h';
import Widget from '../../@treantjs/core/widget';

export default (test, {render, transform}) => {
  test('should create widget without options', t => {
    const Component = () => new Widget();
    const update = render(document.createElement('div'));
    const root = update(<Component/>);

    t.is(root.tagName, 'DIV');
    t.is(root.namespaceURI, 'http://www.w3.org/1999/xhtml');
  });

  test('should create widget with specified tagName', t => {
    const Component = () => new Widget({
      tagName: 'span'
    });

    const update = render(document.createElement('div'));
    const root = update(<Component/>);

    t.is(root.tagName, 'SPAN');
  });

  test('should create widget with specified namespace', t => {
    const Component = () => new Widget({
      tagName: 'svg',
      namespaceURI: 'http://www.w3.org/2000/svg'
    });
    const update = render(document.createElement('div'));
    const root = update(<Component/>);

    t.is(root.tagName, 'svg');
    t.is(root.namespaceURI, 'http://www.w3.org/2000/svg');
  });

  // test('should implement initiation', t => {
  //   t.plan(2);

  //   const Widget = widget({
  //     init: (props, el) => {
  //       t.pass();
  //       el.classList.add('foo');
  //     }
  //   });
  //   const update = render(document.createElement('div'));
  //   update(<Widget/>);

  //   update(<Widget/>);
  //   const root = update(<Widget/>);

  //   t.truthy(root.classList.contains('foo'));
  // });

  // test('should pass (props, el) on init', t => {
  //   t.plan(2);

  //   let elWidget;
  //   const Widget = widget({
  //     init: (props, el) => {
  //       t.deepEqual(props.foo, 'foo');
  //       elWidget = el;
  //     }
  //   });
  //   const update = render(document.createElement('div'));
  //   const root = update(<Widget foo="foo"/>);
  //   t.is(root, elWidget);
  // });

  // test('should have default destroy', t => {
  //   const Widget = widget();

  //   const root = document.createElement('div');
  //   const update = render(root);

  //   update(<Widget/>);
  //   update(<span/>);
  // });

  // test('should implement destroy', t => {
  //   t.plan(1);

  //   const Widget = widget({
  //     destroy: el => {
  //       t.pass();
  //     }
  //   });

  //   const root = document.createElement('div');
  //   const update = render(root);

  //   update(<Widget/>);
  //   update(<Widget/>);
  //   update(<span/>);
  // });

  // test('should pass (el) on destroy', t => {
  //   t.plan(1);

  //   const Widget = widget({
  //     destroy: el => {
  //       t.is(elWidget, el);
  //     }
  //   });

  //   const root = document.createElement('div');
  //   const update = render(root);

  //   update(<Widget foo="foo"/>);
  //   const elWidget = root.firstElementChild;
  //   update(<span/>);
  // });

  // test('should implement update', t => {
  //   t.plan(2);

  //   const Widget = widget({
  //     update: (props, prev, el) => {
  //       t.pass();
  //     }
  //   });

  //   const root = document.createElement('div');
  //   const update = render(root);

  //   update(<Widget/>);
  //   update(<Widget/>);
  //   update(<Widget/>);
  // });

  // test('should pass (props, prev, el) on update', t => {
  //   t.plan(3);

  //   let elWidget;
  //   const Widget = widget({
  //     update: (props, prev, el) => {
  //       t.deepEqual(props.foo, 'bar');
  //       t.deepEqual(prev.foo, 'foo');
  //       elWidget = el;
  //     }
  //   });

  //   const root = document.createElement('div');
  //   const update = render(root);

  //   update(<Widget foo="foo"/>);
  //   update(<Widget foo="bar"/>);
  //   t.is(root.firstElementChild, elWidget);
  // });
};