import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  retry,
  LOCATION_RETRY_REQUEST,
  LOCATION_RETRY_SUCCESS,
  LOCATION_RETRY_FAILURE,
  exit,
  LOCATION_EXIT_REQUEST,
  LOCATION_EXIT_SUCCESS,
  LOCATION_EXIT_FAILURE
} from '../location';

test(
  'should call retry location service and dispatch SUCCESS action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0.content.ref', 'foo')
  )({}),
  t => ({
    Location: {
      retry: contentRef => {
        t.is(contentRef, 'foo');
        return 'foo';
      }
    }
  }),
  retry,
  [
    {
      type: LOCATION_RETRY_REQUEST,
      meta: {contentRef: 'foo'}
    },
    {
      type: LOCATION_RETRY_SUCCESS,
      meta: {contentRef: 'foo'},
      payload: 'foo'
    }
  ]
);

test(
  'should call retry location service and dispatch FAILURE action on error',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0.content.ref', 'foo')
  )({}),
  t => ({
    Location: {
      retry: contentRef => {
        t.is(contentRef, 'foo');
        throw new Error();
      }
    }
  }),
  retry,
  [
    {
      type: LOCATION_RETRY_REQUEST,
      meta: {contentRef: 'foo'}
    },
    {
      type: LOCATION_RETRY_FAILURE,
      meta: {contentRef: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

test(
  'should call exit location service and dispatch SUCCESS action',
  macro,
  {},
  t => ({
    Location: {
      exit: () => {
        return 'foo';
      }
    }
  }),
  exit,
  [
    {
      type: LOCATION_EXIT_REQUEST
    },
    {
      type: LOCATION_EXIT_SUCCESS,
      payload: 'foo'
    }
  ]
);

test(
  'should call exit location service and dispatch FAILURE action on error',
  macro,
  {},
  t => ({
    Location: {
      exit: () => {
        throw new Error();
      }
    }
  }),
  exit,
  [
    {
      type: LOCATION_EXIT_REQUEST
    },
    {
      type: LOCATION_EXIT_FAILURE,
      error: true,
      payload: new Error()
    }
  ]
);
