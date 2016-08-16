import test from 'ava';
import noop from 'lodash/fp/noop';
import {h} from '../../../../@treantjs/core';
import {push} from '../navigation';

const createEvent = ({onPreventDefault}) => ({
  preventDefault: onPreventDefault || noop
});

const createHistory = ({onPush}) => ({
  push: onPush || noop
});

test('should call push with href property', t => {
  t.plan(2);

  const props = {
    href: '/foo'
  };
  const options = {
    history: createHistory({
      onPush: href => {
        t.is(props.href, href);
      }
    })
  };
  const event = createEvent({
    onPreventDefault: () => {
      t.pass();
    }
  });
  const onClick = push(options, props);

  onClick(event);
});

test('should not call push if href isn\'nt defined', t => {
  const props = {};
  const options = {
    history: createHistory({
      onPush: href => {
        t.fail();
      }
    })
  };
  const event = createEvent({
    onPreventDefault: () => {
      t.fail();
    }
  });
  const onClick = push(options, props);

  onClick(event);
});

test('should not call push if history isn\'nt defined', t => {
  const props = {
    href: '/foo'
  };
  const options = {};
  const event = createEvent({
    onPreventDefault: () => {
      t.fail();
    }
  });
  const onClick = push(options)(props);

  onClick(event);
});

test('should not call push if history.push isn\'nt defined', t => {
  const props = {
    href: '/foo'
  };
  const options = {
    history: {}
  };
  const event = createEvent({
    onPreventDefault: () => {
      t.fail();
    }
  });
  const onClick = push(options, props);

  onClick(event);
});
