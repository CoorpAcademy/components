import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  retry,
  LOCATION_RETRY_REQUEST,
  LOCATION_RETRY_SUCCESS,
  LOCATION_RETRY_FAILURE,
  exit,
  LOCATION_EXIT_REQUEST,
  LOCATION_EXIT_SUCCESS,
  LOCATION_EXIT_FAILURE,
  seeComment,
  LOCATION_SEE_COMMENT_REQUEST,
  LOCATION_SEE_COMMENT_SUCCESS,
  LOCATION_SEE_COMMENT_FAILURE,
  back,
  LOCATION_BACK_REQUEST,
  LOCATION_BACK_SUCCESS,
  LOCATION_BACK_FAILURE,
  nextLevel,
  LOCATION_NEXT_CONTENT_REQUEST,
  LOCATION_NEXT_CONTENT_SUCCESS,
  LOCATION_NEXT_CONTENT_FAILURE
} from '../location';

test(
  'should call retry location service and dispatch SUCCESS action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0.content.ref', 'foo')
  )({}),
  t => ({
    Location: {
      retry: contentRef => {
        t.is(contentRef, 'foo');
        return 'foo';
      }
    }
  }),
  retry,
  [
    {
      type: LOCATION_RETRY_REQUEST,
      meta: {contentRef: 'foo'}
    },
    {
      type: LOCATION_RETRY_SUCCESS,
      meta: {contentRef: 'foo'},
      payload: 'foo'
    }
  ],
  1
);

test(
  'should call retry location service and dispatch FAILURE action on error',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0.content.ref', 'foo')
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Location: {
      retry: contentRef => {
        t.is(contentRef, 'foo');
        throw new Error('some error');
      }
    }
  }),
  retry,
  [
    {
      type: LOCATION_RETRY_REQUEST,
      meta: {contentRef: 'foo'}
    },
    {
      type: LOCATION_RETRY_FAILURE,
      meta: {contentRef: 'foo'},
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should call exit location service and dispatch SUCCESS action',
  macro,
  {},
  t => ({
    Location: {
      exit: () => {
        t.pass();
        return 'foo';
      }
    }
  }),
  exit,
  [
    {
      type: LOCATION_EXIT_REQUEST
    },
    {
      type: LOCATION_EXIT_SUCCESS,
      payload: 'foo'
    }
  ],
  1
);

test(
  'should call exit location service and dispatch FAILURE action on error',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Location: {
      exit: () => {
        t.pass();
        throw new Error('some error');
      }
    }
  }),
  exit,
  [
    {
      type: LOCATION_EXIT_REQUEST
    },
    {
      type: LOCATION_EXIT_FAILURE,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should call back location service and dispatch SUCCESS action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set('data.contents.level.entities.foo', {}),
    set('data.progressions.entities.0.content', {type: 'level', ref: 'foo'})
  )({}),
  t => ({
    Location: {
      back: () => {
        t.pass();
        return 'foo';
      }
    }
  }),
  back,
  [
    {
      type: LOCATION_BACK_REQUEST
    },
    {
      type: LOCATION_BACK_SUCCESS,
      payload: 'foo'
    }
  ],
  1
);

test(
  'should call back location service and dispatch FAILURE action on error',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set('data.contents.level.entities.foo', {}),
    set('data.progressions.entities.0.content', {type: 'level', ref: 'foo'})
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Location: {
      back: () => {
        t.pass();
        throw new Error('some error');
      }
    }
  }),
  back,
  [
    {
      type: LOCATION_BACK_REQUEST
    },
    {
      type: LOCATION_BACK_FAILURE,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should call next level location service and dispatch SUCCESS action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'nextContent', 'entities', '0'], {ref: '1.A'}),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'})
  )({}),
  t => ({
    Location: {
      nextLevel: contentRef => {
        t.is(contentRef, '1.A');
        return contentRef;
      }
    }
  }),
  nextLevel,
  [
    {
      type: LOCATION_NEXT_CONTENT_REQUEST
    },
    {
      type: LOCATION_NEXT_CONTENT_SUCCESS,
      payload: '1.A'
    }
  ],
  1
);

test(
  'should call next level location service and dispatch FAILURE action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'nextContent', 'entities', '0'], {ref: '1.A'}),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'})
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Location: {
      nextLevel: contentRef => {
        t.is(contentRef, '1.A');
        throw new Error('some error');
      }
    }
  }),
  nextLevel,
  [
    {
      type: LOCATION_NEXT_CONTENT_REQUEST
    },
    {
      type: LOCATION_NEXT_CONTENT_FAILURE,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should call next level location service and not dispatch any action when no content is found',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'nextContent', 'entities', '0'], null),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'})
  )({}),
  t => ({
    Location: {
      nextLevel: contentRef => {
        t.fail();
      }
    }
  }),
  nextLevel,
  [],
  0
);

test(
  'should call see comment and dispatch SUCCESS action',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'})
  )({}),
  t => ({
    Location: {
      seeComment: content => {
        t.deepEqual(content, {ref: '1.B', level: 'base'});
        return 'foo';
      }
    }
  }),
  seeComment,
  [
    {
      type: LOCATION_SEE_COMMENT_REQUEST
    },
    {
      type: LOCATION_SEE_COMMENT_SUCCESS,
      payload: 'foo'
    }
  ],
  1
);

test(
  'should call see comment and dispatch FAILURE action on error',
  macro,
  pipe(
    set('ui.current.progressionId', '0'),
    set(['data', 'progressions', 'entities', '0'], {content: {ref: '1.B', type: 'level'}}),
    set(['data', 'contents', 'level', 'entities', '1.B'], {ref: '1.B', level: 'base'})
  )({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Location: {
      seeComment: content => {
        t.deepEqual(content, {ref: '1.B', level: 'base'});
        throw new Error('some error');
      }
    }
  }),
  seeComment,
  [
    {
      type: LOCATION_SEE_COMMENT_REQUEST
    },
    {
      type: LOCATION_SEE_COMMENT_FAILURE,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);
