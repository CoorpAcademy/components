import test from 'ava';

import macro from '../../test/helpers/macro';
import {
  fetchVideoUri,
  fetchVideoTracks,
  FETCH_VIDEOS_URI_REQUEST,
  FETCH_VIDEOS_URI_SUCCESS,
  FETCH_VIDEOS_URI_FAILURE,
  FETCH_VIDEOS_TRACKS_REQUEST,
  FETCH_VIDEOS_TRACKS_SUCCESS,
  FETCH_VIDEOS_TRACKS_FAILURE
} from '../videos';
import {VIDEO_TRACK_TYPE} from '../../../definitions/models';
import tracks from '../../../fixtures/tracks';

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
      type: FETCH_VIDEOS_URI_REQUEST,
      meta: {id: '1234', provider: 'foobar'}
    },
    {
      type: FETCH_VIDEOS_URI_SUCCESS,
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
      type: FETCH_VIDEOS_URI_REQUEST,
      meta: {id: '456', provider: 'bazqux'}
    },
    {
      type: FETCH_VIDEOS_URI_FAILURE,
      meta: {id: '456', provider: 'bazqux'},
      error: true,
      payload: new Error('some error')
    }
  ],
  3
);

test(
  'should fetch a subtitle',
  macro,
  {},
  t => ({
    Videos: {
      findTracksById: id => {
        t.is(id, '1234');

        return tracks;
      }
    }
  }),
  fetchVideoTracks('1234'),
  [
    {
      type: FETCH_VIDEOS_TRACKS_REQUEST,
      meta: {id: '1234', type: VIDEO_TRACK_TYPE.SRT}
    },
    {
      type: FETCH_VIDEOS_TRACKS_SUCCESS,
      meta: {id: '1234', type: VIDEO_TRACK_TYPE.SRT},
      payload: tracks
    }
  ],
  1
);

test(
  'should fetch a subtitle (vtt)',
  macro,
  {},
  t => ({
    Videos: {
      findTracksById: id => {
        t.is(id, '1234');

        return tracks;
      }
    }
  }),
  fetchVideoTracks('1234', VIDEO_TRACK_TYPE.VTT),
  [
    {
      type: FETCH_VIDEOS_TRACKS_REQUEST,
      meta: {id: '1234', type: VIDEO_TRACK_TYPE.VTT}
    },
    {
      type: FETCH_VIDEOS_TRACKS_SUCCESS,
      meta: {id: '1234', type: VIDEO_TRACK_TYPE.VTT},
      payload: tracks
    }
  ],
  1
);

test(
  'should return error if fetch subtitle fail failed',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Videos: {
      findTracksById: id => {
        t.is(id, '456');

        throw new Error('some error');
      }
    }
  }),
  fetchVideoTracks('456'),
  [
    {
      type: FETCH_VIDEOS_TRACKS_REQUEST,
      meta: {id: '456', type: VIDEO_TRACK_TYPE.SRT}
    },
    {
      type: FETCH_VIDEOS_TRACKS_FAILURE,
      meta: {id: '456', type: VIDEO_TRACK_TYPE.SRT},
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);
