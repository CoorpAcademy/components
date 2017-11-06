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
const content = {ref: 'contentRef', type: 'chapter'};

const initState = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.content.ref', 'slideRef'),
  set('data.progressions.entities.foo.state.nextContent.ref', 'nextSlideRef'),
  set('data.progressions.entities.foo.content', content),
  set('data.contents.chapter.entities.contentRef', 'chapterContent'),
  set('data.contents.slide.entities.slideRef', 'slide1'),
  set('data.contents.slide.entities.nextSlideRef', 'slide2')
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
          content,
          slide: 'slide2'
        });

        return set(
          'state.viewedResources',
          [{ref: content.ref, type: 'chapter', resources: [resource._id]}],
          {}
        );
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
      payload: set(
        'state.viewedResources',
        [{ref: content.ref, type: 'chapter', resources: [resource._id]}],
        {}
      )
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
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          content,
          slide: 'slide1'
        });

        return set(
          'state.viewedResources',
          [{ref: content.ref, type: 'chapter', resources: [resource._id]}],
          {}
        );
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
      payload: set(
        'state.viewedResources',
        [{ref: content.ref, type: 'chapter', resources: [resource._id]}],
        {}
      )
    }
  ],
  2
);

test(
  'should prevent request if resource has already been seen',
  macro,
  pipe(
    initState,
    set('data.progressions.entities.foo.state.viewedResources', [
      {ref: content.ref, type: 'chapter', resources: [resource._id]}
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
      meta: {progressionId: 'foo', resource}
    }
  ],
  0
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
            ref: resource._id,
            type: resource.type,
            version: '1'
          },
          content,
          slide: 'slide2'
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
