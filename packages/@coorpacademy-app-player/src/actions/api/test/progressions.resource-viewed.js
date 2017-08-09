import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  markResourceAsViewed,
  PROGRESSION_RESOURCE_VIEWED_REQUEST,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_FAILURE
} from '../progressions';

const resource = {_id: 'resourceId', type: 'video'};
const chapter = {ref: 'chapterRef', type: 'chapter'};

const initState = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.nextContent.ref', 'slideRef'),
  set('data.progressions.entities.foo.content', chapter),
  set('data.slides.entities.slideRef', 'slide')
);

test(
  'should mark a resource as viewed',
  macro,
  initState({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          chapter,
          slide: 'slide'
        });

        return set('state.viewedResources', [chapter.ref], {});
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
      payload: set('state.viewedResources', [chapter.ref], {})
    }
  ]
);

test(
  'should prevent request if resource has already been seen',
  macro,
  pipe(initState, set('data.progressions.entities.foo.state.viewedResources', [chapter.ref]))({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.fail();
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  initState({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          resource: {
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          chapter,
          slide: 'slide'
        });
        throw new Error();
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
      payload: new Error()
    }
  ]
);
