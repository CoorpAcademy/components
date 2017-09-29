import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  UI_VIDEO_PAUSE,
  UI_VIDEO_ENDED,
  UI_VIDEO_RESUME,
  play,
  pause,
  resume,
  ended
} from '../video';
import {UI_REVIVAL_PENDING} from '../extra-life';

import {MEDIA_VIEWED_ANALYTICS_REQUEST, MEDIA_VIEWED_ANALYTICS_SUCCESS} from '../../api/analytics';

import {
  PROGRESSION_RESOURCE_VIEWED_REQUEST,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS
} from '../../api/progressions';

const resource = {_id: 'resourceId', type: 'video'};
const content = {ref: 'chapterRef', type: 'chapter'};

test('should dispatch video pause action', macro, {}, t => ({}), pause(resource), [
  {
    type: UI_VIDEO_PAUSE,
    resource
  }
]);

test('should dispatch video ended action', macro, {}, t => ({}), ended(resource), [
  {
    type: UI_VIDEO_ENDED,
    resource
  }
]);

test('should dispatch video resume action', macro, {}, t => ({}), resume(resource), [
  {
    type: UI_VIDEO_RESUME,
    resource
  }
]);

test(
  'should dispatch video play action and forward to mark a resource as viewed',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'media'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state.nextContent.ref', 'slideRef'),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef', 'slide')
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {}
    },
    Progressions: {
      markResourceAsViewed: (progressionId, payload) => {
        t.is(progressionId, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          chapter: content,
          slide: 'slide'
        });

        return set('state.viewedResources', [content.ref], {});
      }
    }
  }),
  play(resource),
  [
    {
      type: MEDIA_VIEWED_ANALYTICS_REQUEST,
      meta: {resource, location: 'media'}
    },
    {
      type: MEDIA_VIEWED_ANALYTICS_SUCCESS,
      meta: {resource, location: 'media'},
      payload: undefined
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    [
      {
        type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
        meta: {progressionId: 'foo', resource},
        payload: set('state.viewedResources', [content.ref], {})
      },
      set('data.progressions.entities.foo.state.viewedResources', [content.ref], {})
    ]
  ]
);

test(
  'should dispatch video play action and forward to mark a resource as viewed',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'media'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state.nextContent', {
      type: 'node',
      ref: 'extraLife'
    }),
    set('data.progressions.entities.foo.content', chapter),
    set('data.slides.entities.slideRef', 'slide')
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {}
    },
    Progressions: {
      markResourceAsViewed: (progressionId, payload) => {
        t.is(progressionId, 'foo');
        return 'foo';
      }
    }
  }),
  play(resource),
  [
    {
      type: MEDIA_VIEWED_ANALYTICS_REQUEST,
      meta: {resource, location: 'media'}
    },
    {
      type: MEDIA_VIEWED_ANALYTICS_SUCCESS,
      meta: {resource, location: 'media'},
      payload: undefined
    },
    {
      type: UI_REVIVAL_PENDING
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    [
      {
        type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
        meta: {progressionId: 'foo', resource},
        payload: 'foo'
      }
    ]
  ]
);
