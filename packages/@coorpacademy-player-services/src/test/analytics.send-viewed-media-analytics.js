// @flow

import test from 'ava';
import {sendViewedMediaAnalytics} from '../analytics';
import type {Resource} from '../types';

type DataEvent = {
  event: string,
  mediaType: string,
  location: string
};

// eslint-disable-next-line no-shadow
type Window = {
  dataLayer: Array<DataEvent>
};

// eslint-disable-next-line no-shadow
declare var global: {window: Window};

test('push data to window.dataLayer', t => {
  global.window = {dataLayer: []};
  const resource: Resource = {
    _id: '_foo',
    ref: 'foo',
    mediaUrl: '',
    mimeType: 'video/mp4',
    type: 'video'
  };

  sendViewedMediaAnalytics(resource, 'media');
  t.deepEqual((global.window.dataLayer[0]: DataEvent), {
    event: 'mediaViewed',
    mediaType: 'video',
    location: 'media'
  });
});
