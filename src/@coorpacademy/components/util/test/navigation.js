import test from 'ava';
import forEach from 'lodash/fp/forEach';
import noop from 'lodash/fp/noop';
import {h} from '../../../../@treantjs/core';
import {createNavigationHandler, pushToHistory} from '../navigation';
import {NAVIGATE} from '../../../redux-tools/redux-history';

const createEvent = ({href, button = 0, ...props}) => ({
  target: {
    href
  },
  button,
  preventDefault: noop,
  ...props
});

test('should push to history navigation event', t => {
  t.plan(1);

  const options = {
    history: {
      push: href => t.is(href, '/foo')
    }
  };
  const props = {
    href: '/foo'
  };
  const onClick = pushToHistory(options);
  const event = createEvent(props);

  onClick(props)(event);
});

test('should not do anything if history is not in the options', t => {
  const props = {
    href: '/foo'
  };
  const onClick = pushToHistory({});
  const event = createEvent(props);

  onClick(props)(event);
});

test('should not do anything if event does not contain a target href', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };
  const onClick = pushToHistory(options);

  onClick({})({});
});

test('should not do anything if event is prevented', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };

  const props = {
    href: '/foo',
    defaultPrevented: true
  };
  const onClick = pushToHistory(options);
  const event = createEvent(props);

  onClick(props)(event);
});

test('should not do anything if event is mouse click but not left click', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };

  const props = {
    href: '/foo',
    button: 1
  };
  const onClick = pushToHistory(options);
  const event = createEvent(props);

  onClick(props)(event);
});

test('should not do anything if event is mouse click used with keyboard modifiers', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };

  const props = {
    href: '/foo'
  };

  const createEventWithModifier = modifier =>
    createEvent({...props, [modifier]: true});

  const onClick = pushToHistory(options);
  onClick(props)(createEventWithModifier('altKey'));
  onClick(props)(createEventWithModifier('metaKey'));
  onClick(props)(createEventWithModifier('ctrlKey'));
  onClick(props)(createEventWithModifier('shiftKey'));
});
