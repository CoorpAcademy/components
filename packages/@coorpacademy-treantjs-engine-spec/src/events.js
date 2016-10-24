import {h} from '@coorpacademy/treantjs-core';

export default (test, {render, transform}) => {
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
