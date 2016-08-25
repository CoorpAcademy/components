import test from 'ava';
import forEach from 'lodash/fp/forEach';
import noop from 'lodash/fp/noop';
import {h} from '../../../../@treantjs/core';
import {createNavigationHandler} from '../navigation';
import {NAVIGATE} from '../../../redux-tools/redux-history';

const createEvent = ({onPreventDefault, props, extra = {}}) => ({
  target: {
    ...props
  },
  preventDefault: onPreventDefault || noop,
  button: 0,
  ...extra
});

const createHistory = ({onCreate}) => ({
  createLocation: pathname => {
    onCreate(pathname);
    return {pathname};
  }
});

test('should dispatch navigation event', t => {
  t.plan(3);

  const props = {
    href: '/foo'
  };
  const options = {
    history: createHistory({
      onCreate: href => t.is(props.href, href)
    }),
    dispatch: action =>
      t.deepEqual({
        type: NAVIGATE,
        payload: {
          pathname: props.href
        }
      }, action)
  };
  const event = createEvent({
    props,
    onPreventDefault: () => t.pass()
  });
  const onClick = createNavigationHandler(options);

  onClick(event);
});

test('shouldn\'t run/launch action if event is prevented', t => {
  const props = {
    href: '/foo'
  };
  const options = {
    history: createHistory({
      onCreate: href => t.fail()
    }),
    dispatch: () => t.fail()
  };
  const event = createEvent({
    props,
    onPreventDefault: () => t.fail(),
    extra: {
      defaultPrevented: true
    }
  });
  const onClick = createNavigationHandler(options);

  onClick(event);
});

test('shouldn\'t run/launch action if event is a left click event', t => {
  const props = {
    href: '/foo'
  };
  const options = {
    history: createHistory({
      onCreate: href => t.fail()
    }),
    dispatch: () => t.fail()
  };
  const event = createEvent({
    props,
    onPreventDefault: () => t.fail(),
    extra: {
      button: 1
    }
  });
  const onClick = createNavigationHandler(options);

  onClick(event);
});

test('shouldn\'t run/launch action if event is a modified event', t => {
  const props = {
    href: '/foo'
  };
  const options = {
    history: createHistory({
      onCreate: href => t.fail()
    }),
    dispatch: () => t.fail()
  };
  const events = [
    createEvent({
      props,
      onPreventDefault: () => t.fail(),
      extra: {
        metaKey: true
      }
    }),
    createEvent({
      props,
      onPreventDefault: () => t.fail(),
      extra: {
        altKey: true
      }
    }),
    createEvent({
      props,
      onPreventDefault: () => t.fail(),
      extra: {
        ctrlKey: true
      }
    }),
    createEvent({
      props,
      onPreventDefault: () => t.fail(),
      extra: {
        shiftKey: true
      }
    })
  ];
  const onClick = createNavigationHandler(options);

  forEach(onClick, events);
});

test('shouldn\'t run/launch action if target was defined', t => {
  const props = {
    href: '/foo',
    target: 'blank'
  };
  const options = {
    history: createHistory({
      onCreate: href => t.fail()
    }),
    dispatch: () => t.fail()
  };
  const event = createEvent({
    props,
    onPreventDefault: () => t.fail()
  });
  const onClick = createNavigationHandler(options);

  onClick(event);
});
