import test from 'ava';
import forEach from 'lodash/fp/forEach';
import noop from 'lodash/fp/noop';
import {h} from '../../../../@treantjs/core';
import {createNavigationHandler, pushToHistory} from '../navigation';
import {NAVIGATE} from '../../../redux-tools/redux-history';

const createEvent = href => ({
  target: {
    href
  },
  preventDefault: noop
});

test('should push to history navigation event', t => {
  t.plan(1);

  const options = {
    history: {
      push: href => t.is(href, '/foo')
    }
  };
  const onClick = pushToHistory(options);
  const event = createEvent('/foo');

  onClick(event);
});

test('should not do anything if history is not in the options', t => {
  const onClick = pushToHistory({});
  const event = createEvent('/foo');

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
