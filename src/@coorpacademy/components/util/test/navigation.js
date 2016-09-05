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
  const eventOptions = {
    href: '/foo'
  };
  const onClick = pushToHistory(options);
  const event = createEvent(eventOptions);

  onClick(event);
});

test('should not do anything if history is not in the options', t => {
  const eventOptions = {
    href: '/foo'
  };
  const onClick = pushToHistory({});
  const event = createEvent(eventOptions);

  onClick(event);
});

test('should not do anything if event does not contain a target href', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };
  const onClick = pushToHistory(options);

  onClick({});
});

test('should not do anything if event is prevented', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };

  const eventOptions = {
    href: '/foo',
    defaultPrevented: true
  };
  const onClick = pushToHistory(options);
  const event = createEvent(eventOptions);

  onClick(event);
});

test('should not do anything if event is mouse click but not left click', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };

  const eventOptions = {
    href: '/foo',
    button: 1
  };
  const onClick = pushToHistory(options);
  const event = createEvent(eventOptions);

  onClick(event);
});

test('should not do anything if event is mouse click used with keyboard modifiers', t => {
  const options = {
    history: {
      push: href => t.fail()
    }
  };

  const createEventWithModifier = modifier =>
    createEvent({href: '/foo', [modifier]: true});

  const onClick = pushToHistory(options);
  onClick(createEventWithModifier('altKey'));
  onClick(createEventWithModifier('metaKey'));
  onClick(createEventWithModifier('ctrlKey'));
  onClick(createEventWithModifier('shiftKey'));
});
