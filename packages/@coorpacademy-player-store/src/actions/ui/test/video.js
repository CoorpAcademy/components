import test from 'ava';
import {set, pipe} from 'lodash/fp';
import macro from '../../test/helpers/macro';
import {
  UI_VIDEO_ERROR,
  UI_VIDEO_PAUSE,
  UI_VIDEO_ENDED,
  UI_VIDEO_RESUME,
  play,
  pause,
  resume,
  ended
} from '../video';

import {
  MEDIA_VIEWED_ANALYTICS_REQUEST,
  MEDIA_VIEWED_ANALYTICS_SUCCESS,
  PROGRESSION_UPDATED_ON_NODE
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
    set('ui.corrections.playResource', resource._id),
    set('ui.route.foo', 'question'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state', {nextContent: {type: 'slide', ref: 'slideRef'}}),
    set('data.progressions.entities.foo.engine', {
      version: '1',
      ref: 'microlearning'
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef.chapter_id', 'chapter'),
    set('data.contents.slide.entities.slideRef.lessons', [resource])
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {
        t.pass();
      },
      sendProgressionUpdated: () => {
        t.pass();
      },
      sendProgressionFinished: () => {
        t.fail();
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

        return set(
          'state',
          {viewedResources: [content.ref], nextContent: {type: 'slide', ref: 'slideRef'}},
          {}
        );
      }
    }
  }),
  play(),
  [
    {
      type: MEDIA_VIEWED_ANALYTICS_REQUEST,
      meta: {resource, location: 'question'}
    },
    {
      type: MEDIA_VIEWED_ANALYTICS_SUCCESS,
      meta: {resource, location: 'question'},
      payload: undefined
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource},
      payload: set(
        'state',
        {viewedResources: [content.ref], nextContent: {type: 'slide', ref: 'slideRef'}},
        {}
      )
    },
    {
      type: PROGRESSION_UPDATED_ON_NODE,
      meta: {id: 'foo'}
    }
  ],
  4
);

test(
  'should dispatch video play action for default resource when none is selected',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'question'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state', {nextContent: {type: 'slide', ref: 'slideRef'}}),
    set('data.progressions.entities.foo.engine', {
      version: '1',
      ref: 'microlearning'
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef.chapter_id', 'chapter'),
    set('data.contents.slide.entities.slideRef.lessons', [resource])
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {
        t.pass();
      },
      sendProgressionUpdated: () => {
        t.pass();
      },
      sendProgressionFinished: () => {
        t.fail();
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

        return set(
          'state',
          {viewedResources: [content.ref], nextContent: {type: 'slide', ref: 'slideRef'}},
          {}
        );
      }
    }
  }),
  play(),
  [
    {
      type: MEDIA_VIEWED_ANALYTICS_REQUEST,
      meta: {resource, location: 'question'}
    },
    {
      type: MEDIA_VIEWED_ANALYTICS_SUCCESS,
      meta: {resource, location: 'question'},
      payload: undefined
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource},
      payload: set(
        'state',
        {viewedResources: [content.ref], nextContent: {type: 'slide', ref: 'slideRef'}},
        {}
      )
    },
    {
      type: PROGRESSION_UPDATED_ON_NODE,
      meta: {id: 'foo'}
    }
  ],
  4
);

test(
  'should throw error if no resource is provided within the slide',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'question'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state.nextContent.ref', 'slideRef'),
    set('data.progressions.entities.foo.engine', {
      version: '1',
      ref: 'microlearning'
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef.chapter_id', 'chapter')
  )({}),
  t => ({}),
  play(),
  [
    {
      type: UI_VIDEO_ERROR,
      payload: 'cannot play video for progression "foo", no resources found.'
    }
  ],
  0
);

test(
  'should throw error if resources are empty within the slide',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.route.foo', 'question'),
    set('data.progressions.entities.foo._id', 'foo'),
    set('data.progressions.entities.foo.state.nextContent.ref', 'slideRef'),
    set('data.progressions.entities.foo.engine', {
      version: '1',
      ref: 'microlearning'
    }),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef.chapter_id', 'chapter'),
    set('data.contents.slide.entities.slideRef.lessons', [])
  )({}),
  t => ({}),
  play(),
  [
    {
      type: UI_VIDEO_ERROR,
      payload: 'cannot play video for progression "foo", no resources found.'
    }
  ],
  0
);

test(
  'should fail to dispatch video play action when no progressionId is provided',
  macro,
  {},
  t => ({}),
  play(),
  [
    {
      type: UI_VIDEO_ERROR,
      payload: 'progressionId is required.'
    }
  ],
  0
);

test(
  'should dispatch video play action and forward to mark a resource as viewed when requesting an extra life',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('ui.corrections.playResource', resource._id),
    set('ui.route.foo', 'correction'),
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
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.content', content),
    set('data.contents.slide.entities.slideRef._id', 'slide'),
    set('data.contents.slide.entities.slideRef.lessons', [resource])
  )({}),
  t => ({
    Analytics: {
      sendViewedMediaAnalytics: (media, location) => {
        t.pass();
      },
      sendProgressionUpdated: () => {
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
  play(),
  [
    {
      type: MEDIA_VIEWED_ANALYTICS_REQUEST,
      meta: {resource, location: 'correction'}
    },
    {
      type: MEDIA_VIEWED_ANALYTICS_SUCCESS,
      meta: {resource, location: 'correction'},
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
      type: PROGRESSION_UPDATED_ON_NODE,
      meta: {id: 'foo'}
    }
  ],
  3
);
