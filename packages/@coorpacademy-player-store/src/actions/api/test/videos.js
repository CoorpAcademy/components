import test from 'ava';

import macro from '../../test/helpers/macro';
import {
  fetchVideoUri,
  fetchVideoSubtitles,
  VIDEOS_FETCH_URI_REQUEST,
  VIDEOS_FETCH_URI_SUCCESS,
  VIDEOS_FETCH_URI_FAILURE,
  FETCH_VIDEOS_SUBTITLE_REQUEST,
  FETCH_VIDEOS_SUBTITLE_SUCCESS,
  FETCH_VIDEOS_SUBTITLE_FAILURE
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

const tracks = [
  {
    kind: 'captions',
    file: 'https://content.jwplatform.com/tracks/daimmENN.srt',
    label: 'fr',
    default: true
  },
  {
    kind: 'captions',
    file: 'https://content.jwplatform.com/tracks/YBWl6755.srt',
    label: 'en'
  },
  {
    kind: 'captions',
    file: 'https://content.jwplatform.com/tracks/blyQNetS.srt',
    label: 'de'
  },
  {
    kind: 'thumbnails',
    file: 'https://content.jwplatform.com/strips/ZCbD564r-120.vtt'
  }
];

test(
  'should fetch a subtitle',
  macro,
  {},
  t => ({
    Videos: {
      findVideoSubtitleById: id => {
        t.is(id, '1234');

        return tracks;
      }
    }
  }),
  fetchVideoSubtitles('1234'),
  [
    {
      type: FETCH_VIDEOS_SUBTITLE_REQUEST,
      meta: {id: '1234'}
    },
    {
      type: FETCH_VIDEOS_SUBTITLE_SUCCESS,
      meta: {id: '1234'},
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
      findVideoSubtitleById: id => {
        t.is(id, '456');

        throw new Error('some error');
      }
    }
  }),
  fetchVideoSubtitles('456'),
  [
    {
      type: FETCH_VIDEOS_SUBTITLE_REQUEST,
      meta: {id: '456'}
    },
    {
      type: FETCH_VIDEOS_SUBTITLE_FAILURE,
      meta: {id: '456'},
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);
