import test from 'ava';
import set from 'lodash/fp/set';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  markResourceAsViewed,
  PROGRESSION_RESOURCE_VIEWED_REQUEST,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_FAILURE
} from '../progressions';

const resource = {_id: 'resourceId', ref: 'resourceRef', type: 'video'};
const resourceWithoutRef = {_id: 'resourceId', type: 'pdf'};
const content = {ref: 'contentRef', type: 'chapter'};

const stateForViewedResource = pipe(
  set('state.viewedResources', [{ref: 'contentRef', type: 'chapter', resources: ['resourceRef']}]),
  set('state.hasViewedAResourceAtThisStep', true)
)({});

const initState = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.content.ref', 'slideRef'),
  set('data.progressions.entities.foo.state.nextContent.ref', 'nextSlideRef'),
  set('data.progressions.entities.foo.state.hasViewedAResourceAtThisStep', false),
  set('data.progressions.entities.foo.content', content),
  set('data.contents.chapter.entities.contentRef', 'chapterContent'),
  set('data.contents.slide.entities.slideRef.chapter_id', 'chapter1'),
  set('data.contents.slide.entities.nextSlideRef.chapter_id', 'chapter2')
);

test(
  'should mark the resource of the nextContent as viewed',
  macro,
  initState(set('ui.route.foo', 'media', {})),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: 'resourceRef',
            type: 'video',
            version: '1'
          },
          content: {
            type: 'chapter',
            ref: 'chapter2'
          }
        });

        return stateForViewedResource;
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource},
      payload: stateForViewedResource
    }
  ],
  2
);

test(
  'should use resource._id as the ref if the resource has no ref',
  macro,
  initState(set('ui.route.foo', 'media', {})),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: 'resourceId',
            type: 'pdf',
            version: '1'
          },
          content: {
            type: 'chapter',
            ref: 'chapter2'
          }
        });

        return stateForViewedResource;
      }
    }
  }),
  markResourceAsViewed('foo', resourceWithoutRef),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource: resourceWithoutRef}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource: resourceWithoutRef},
      payload: stateForViewedResource
    }
  ],
  2
);

test(
  'should mark the resource of the content as viewed if nextContent is unavailable',
  macro,
  pipe(
    initState,
    omit('data.progressions.entities.foo.state.nextContent.ref'),
    set('ui.route.foo', 'media')
  )({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: 'resourceRef',
            type: 'video',
            version: '1'
          },
          content: {
            type: 'chapter',
            ref: 'chapter1'
          }
        });

        return stateForViewedResource;
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource},
      payload: stateForViewedResource
    }
  ],
  2
);

test(
  'should return error if request failed',
  macro,
  initState(set('ui.route.foo', 'media', {})),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: 'resourceRef',
            type: 'video',
            version: '1'
          },
          content: {
            type: 'chapter',
            ref: 'chapter2'
          }
        });
        throw new Error('some error');
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_FAILURE,
      meta: {progressionId: 'foo', resource},
      error: true,
      payload: new Error('some error')
    }
  ],
  3
);
