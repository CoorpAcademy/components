// @flow strict

import test from 'ava';
import {sendViewedMediaAnalytics} from '../analytics';

// eslint-disable-next-line no-shadow
import type {Resource, Window} from '../definitions';

// eslint-disable-next-line no-shadow
declare var global: {|window: Window|};

test('should push an event even if dataLayer is not defined previously', t => {
  global.window = {dataLayer: undefined};

  const resource: Resource = {
    _id: '_foo',
    ref: 'foo',
    mediaUrl: '',
    mimeType: 'video/mp4',
    type: 'video'
  };

  sendViewedMediaAnalytics(resource, 'media');
  t.deepEqual(global.window.dataLayer, [
    {
      event: 'mediaViewed',
      mediaType: 'video',
      location: 'media'
    }
  ]);
});

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

  if (global.window.dataLayer === undefined) {
    t.fail();
  }

  t.deepEqual(global.window.dataLayer, [
    {
      event: 'mediaViewed',
      mediaType: 'video',
      location: 'media'
    }
  ]);
});
