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
import {UI_PROGRESSION_UPDATED} from '../progressions';

import {
  MEDIA_VIEWED_ANALYTICS_REQUEST,
  MEDIA_VIEWED_ANALYTICS_SUCCESS,
  SEND_PROGRESSION_ANALYTICS_REQUEST,
  SEND_PROGRESSION_ANALYTICS_SUCCESS
} from '../../api/analytics';

import {
  PROGRESSION_RESOURCE_VIEWED_REQUEST,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS
} from '../../api/progressions';

const resource = {_id: 'resourceId', ref: 'resourceRef', type: 'video'};
const content = {ref: 'chapterRef', type: 'chapter'};

test(
  'should dispatch video pause action',
  macro,
  {},
  t => ({}),
  pause(resource),
  [
    {
      type: UI_VIDEO_PAUSE,
      resource
    }
  ],
  0
);

test(
  'should dispatch video ended action',
  macro,
  {},
  t => ({}),
  ended(resource),
  [
    {
      type: UI_VIDEO_ENDED,
      resource
    }
  ],
  0
);

test(
  'should dispatch video resume action',
  macro,
  {},
  t => ({}),
  resume(resource),
  [
    {
      type: UI_VIDEO_RESUME,
      resource
    }
  ],
  0
);

test(
  'should dispatch video play action and forward to mark a resource as viewed',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'media'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state.nextContent.ref', 'slideRef'),
    set('data.progressions.entities.foo.engine', {
      version: '1',
      ref: 'microlearning'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef.chapter_id', 'chapter')
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {
        t.pass();
      },
      sendProgressionAnalytics: () => {
        t.pass();
        return 'qux';
      }
    },
    Progressions: {
      markResourceAsViewed: (progressionId, payload) => {
        t.is(progressionId, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: 'resourceRef',
            type: 'video',
            version: '1'
          },
          content: {
            type: 'chapter',
            ref: 'chapter'
          }
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
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource},
      payload: set('state.viewedResources', [content.ref], {})
    },
    {
      type: UI_PROGRESSION_UPDATED,
      meta: {id: 'foo'}
    },
    {
      type: SEND_PROGRESSION_ANALYTICS_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SEND_PROGRESSION_ANALYTICS_SUCCESS,
      meta: {id: 'foo'},
      payload: 'qux'
    }
  ],
  4
);

test(
  'should dispatch video play action and forward to mark a resource as viewed when requesting an extra life',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'media'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state.content', {
      type: 'slide',
      ref: 'slideRef'
    }),
    set('data.progressions.entities.foo.state.nextContent', {
      type: 'node',
      ref: 'extraLife'
    }),
    set('data.progressions.entities.foo.engine', {
      version: '1',
      ref: 'microlearning'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef._id', 'slide')
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {
        t.pass();
      },
      sendProgressionAnalytics: () => {
        t.pass();
        return 'qux';
      }
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
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource},
      payload: 'foo'
    },
    {
      type: UI_PROGRESSION_UPDATED,
      meta: {id: 'foo'}
    },
    {
      type: SEND_PROGRESSION_ANALYTICS_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SEND_PROGRESSION_ANALYTICS_SUCCESS,
      meta: {id: 'foo'},
      payload: 'qux'
    }
  ],
  3
);
