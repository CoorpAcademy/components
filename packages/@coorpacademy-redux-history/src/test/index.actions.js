import test from 'ava';
import {toPairs, forEach} from 'lodash/fp';

import {
  LOCATION,
  createLocation,
  NAVIGATE,
  createPushNavigate,
  createReplaceNavigate,
  createGoNavigate,
  createGoBackNavigate,
  createGoForwardNavigate
} from '..';

test('createLocation should create a LOCATION action', t => {
  const action = createLocation({
    pathname: '/'
  });
  t.is(action.type, LOCATION);
  t.is(action.payload.pathname, '/');
});

forEach(
  ([nameAction, createAction]) => {
    test(`createNavigate should create a NAVIGATE action with ${nameAction}`, t => {
      const action = createAction('/');
      t.is(action.type, NAVIGATE);
      t.truthy(action.payload.action);
      t.deepEqual(action.payload.args, ['/']);
    });
  },
  toPairs({
    createPushNavigate,
    createReplaceNavigate,
    createGoNavigate,
    createGoBackNavigate,
    createGoForwardNavigate
  })
);
