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

const resource = {_id: 'resourceId', type: 'video'};
const chapter = {ref: 'chapterRef', type: 'chapter'};

const initState = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.content.ref', 'slideRef'),
  set('data.progressions.entities.foo.state.nextContent.ref', 'nextSlideRef'),
  set('data.progressions.entities.foo.content', chapter),
  set('data.slides.entities.slideRef', 'slide1'),
  set('data.slides.entities.nextSlideRef', 'slide2')
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
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          chapter,
          slide: 'slide2'
        });

        return set(
          'state.viewedResources',
          [{ref: chapter.ref, type: 'chapter', resources: [resource._id]}],
          {}
        );
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource, location: 'media'}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource, location: 'media'},
      payload: set(
        'state.viewedResources',
        [{ref: chapter.ref, type: 'chapter', resources: [resource._id]}],
        {}
      )
    }
  ]
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
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          chapter,
          slide: 'slide1'
        });

        return set(
          'state.viewedResources',
          [{ref: chapter.ref, type: 'chapter', resources: [resource._id]}],
          {}
        );
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource, location: 'media'}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo', resource, location: 'media'},
      payload: set(
        'state.viewedResources',
        [{ref: chapter.ref, type: 'chapter', resources: [resource._id]}],
        {}
      )
    }
  ]
);

test(
  'should prevent request if resource has already been seen',
  macro,
  pipe(
    initState,
    set('data.progressions.entities.foo.state.viewedResources', [
      {ref: chapter.ref, type: 'chapter', resources: [resource._id]}
    ]),
    set('ui.route.foo', 'media')
  )({}),
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
      meta: {progressionId: 'foo', resource, location: 'media'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  initState(set('ui.route.foo', 'media', {})),
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
          slide: 'slide2'
        });
        throw new Error();
      }
    }
  }),
  markResourceAsViewed('foo', resource),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo', resource, location: 'media'}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_FAILURE,
      meta: {progressionId: 'foo', resource, location: 'media'},
      error: true,
      payload: new Error()
    }
  ]
);
