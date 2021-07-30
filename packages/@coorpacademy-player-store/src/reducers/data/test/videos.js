import test from 'ava';

import reducer from '../videos';
import {
  FETCH_VIDEOS_URI_REQUEST,
  FETCH_VIDEOS_URI_SUCCESS,
  FETCH_VIDEOS_URI_FAILURE,
  FETCH_VIDEOS_TRACKS_REQUEST,
  FETCH_VIDEOS_TRACKS_SUCCESS,
  FETCH_VIDEOS_TRACKS_FAILURE
} from '../../../actions/api/videos';
import macro from '../../test/helpers/macro';

import tracks from '../../../fixtures/tracks';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entities to null on request for uri',
  macro,
  reducer,
  {},
  {
    type: FETCH_VIDEOS_URI_REQUEST,
    meta: {id: 'foo', provider: 'foobar'}
  },
  {entities: {foo: {uri: null}}}
);

test(
  'should do nothing if entity already exists on request for uri',
  macro,
  reducer,
  {entities: {foo: {uri: 'https://foo.bar/baz.mp4'}}},
  {
    type: FETCH_VIDEOS_URI_REQUEST,
    meta: {id: 'foo', provider: 'foobar'}
  },
  {entities: {foo: {uri: 'https://foo.bar/baz.mp4'}}}
);

test(
  'should set entities on success for uri',
  macro,
  reducer,
  {},
  {
    type: FETCH_VIDEOS_URI_SUCCESS,
    meta: {id: 'foo', provider: 'foobar'},
    payload: 'https://foo.bar/baz.mp4'
  },
  {entities: {foo: {uri: 'https://foo.bar/baz.mp4'}}}
);

test(
  'should remove null on failure for uri',
  macro,
  reducer,
  {entities: {foo: {uri: null}}},
  {
    type: FETCH_VIDEOS_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {
    entities: {
      foo: {}
    }
  }
);

test(
  'should do nothing is entity already exists on failure',
  macro,
  reducer,
  {entities: {foo: {uri: 'https://foo.bar/baz.mp4'}}},
  {
    type: FETCH_VIDEOS_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {entities: {foo: {uri: 'https://foo.bar/baz.mp4'}}}
);

test(
  'should set entities to null on request for tracks',
  macro,
  reducer,
  {},
  {
    type: FETCH_VIDEOS_TRACKS_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: {tracks: null}}}
);

test(
  'should do nothing if entity already exists on request for tracks',
  macro,
  reducer,
  {entities: {foo: {tracks: null}}},
  {
    type: FETCH_VIDEOS_TRACKS_REQUEST,
    meta: {id: 'foo'}
  },
  {entities: {foo: {tracks: null}}}
);

test(
  'should set entities on success for tracks',
  macro,
  reducer,
  {},
  {
    type: FETCH_VIDEOS_TRACKS_SUCCESS,
    meta: {id: 'foo'},
    payload: tracks
  },
  {entities: {foo: {tracks}}}
);

test(
  'should remove null on failure for tracks',
  macro,
  reducer,
  {entities: {foo: {}}},
  {
    type: FETCH_VIDEOS_TRACKS_FAILURE,
    meta: {id: 'foo'},
    error: true,
    payload: ''
  },
  {
    entities: {
      foo: {}
    }
  }
);

test(
  'should do nothing is entity already exists on failure on tracks',
  macro,
  reducer,
  {entities: {foo: {tracks}}},
  {
    type: FETCH_VIDEOS_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {entities: {foo: {tracks}}}
);

test(
  'should not modify state on fetch tracks failure',
  macro,
  reducer,
  {entities: {foo: {tracks, uri: 'foobar.com'}}},
  {
    type: FETCH_VIDEOS_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {entities: {foo: {tracks, uri: 'foobar.com'}}}
);

test(
  'should not modify state on fetch uri failure',
  macro,
  reducer,
  {entities: {foo: {tracks, uri: 'foobar.com'}}},
  {
    type: FETCH_VIDEOS_URI_FAILURE,
    meta: {id: 'foo', provider: 'foobar'},
    error: true,
    payload: ''
  },
  {entities: {foo: {tracks, uri: 'foobar.com'}}}
);
