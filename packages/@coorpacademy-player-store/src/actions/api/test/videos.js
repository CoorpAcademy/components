import test from 'ava';

import macro from '../../test/helpers/macro';
import {
  fetchVideoUri,
  VIDEOS_FETCH_URI_REQUEST,
  VIDEOS_FETCH_URI_SUCCESS,
  VIDEOS_FETCH_URI_FAILURE
} from '../videos';

test(
  'should fetch a video uri',
  macro,
  {},
  t => ({
    Videos: {
      findUriById: (id, provider) => {
        t.is(id, '1234');
        t.is(provider, 'foobar');

        return 'https://foo.bar/1234.mp4';
      }
    }
  }),
  fetchVideoUri('1234', 'foobar'),
  [
    {
      type: VIDEOS_FETCH_URI_REQUEST,
      meta: {id: '1234', provider: 'foobar'}
    },
    {
      type: VIDEOS_FETCH_URI_SUCCESS,
      meta: {id: '1234', provider: 'foobar'},
      payload: 'https://foo.bar/1234.mp4'
    }
  ],
  2
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Videos: {
      findUriById: (id, provider) => {
        t.is(id, '456');
        t.is(provider, 'bazqux');
        throw new Error('some error');
      }
    }
  }),
  fetchVideoUri('456', 'bazqux'),
  [
    {
      type: VIDEOS_FETCH_URI_REQUEST,
      meta: {id: '456', provider: 'bazqux'}
    },
    {
      type: VIDEOS_FETCH_URI_FAILURE,
      meta: {id: '456', provider: 'bazqux'},
      error: true,
      payload: new Error('some error')
    }
  ],
  3
);
