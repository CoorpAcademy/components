import test from 'ava';
import {pipe, set} from 'lodash/fp';
import macro from '../../test/helpers/macro';
import {
  fetchBestProgression,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  PROGRESSION_FETCH_BESTOF_FAILURE
} from '../progressions';

const progressionContent = {type: 'foo', ref: 'bar'};
const engine = {ref: 'microlearning', version: '1'};

const state = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo.content', progressionContent),
  set('data.progressions.entities.foo.engine', engine)
)({});

test(
  'should fetch best progression',
  macro,
  state,
  t => ({
    Progressions: {
      findBestOf: (engineRef, contentType, contentRef, id) => {
        t.is(engineRef, 'microlearning');
        t.is(contentRef, 'bar');
        t.is(contentType, 'foo');
        t.is(id, 'foo');
        return 'baz';
      }
    }
  }),
  fetchBestProgression(progressionContent, 'foo'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: progressionContent
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: progressionContent,
      payload: 'baz'
    }
  ],
  4
);

test(
  'should dispatch failure if no engine is found',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.content', progressionContent)
  )({}),
  t => ({}),
  fetchBestProgression(progressionContent, 'foo'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_FAILURE,
      payload: 'progression "foo" has no engine.'
    }
  ],
  0
);

test(
  'should prevent request if bestScore already fetched',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {engine, content: {type: 'chapter', ref: 'plop'}}),
    set('data.contents.chapter.entities.plop.bestScore', 0)
  )({}),
  t => ({
    Progressions: {
      findBestOf: (engineRef, contentType, contentRef, id) => {
        t.fail();
      }
    }
  }),
  fetchBestProgression(progressionContent, 'foo'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: progressionContent
    }
  ],
  0
);

test(
  'should force request if bestScore should be refreshed',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {engine, content: {type: 'chapter', ref: 'plop'}}),
    set('data.contents.chapter.entities.plop.bestScore', 0)
  )({}),
  t => ({
    Progressions: {
      findBestOf: (engineRef, contentType, contentRef, id) => {
        t.is(engineRef, 'microlearning');
        t.is(contentRef, 'bar');
        t.is(contentType, 'foo');
        t.is(id, 'foo');
        return 'baz';
      }
    }
  }),
  fetchBestProgression(progressionContent, 'foo', true),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: progressionContent
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: progressionContent,
      payload: 'baz'
    }
  ],
  4
);

test(
  'should return error if request failed',
  macro,
  state,
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      findBestOf: (engineRef, contentType, contentRef, id) => {
        t.is(contentRef, 'bar');
        throw new Error('some error');
      }
    }
  }),
  fetchBestProgression(progressionContent, 'foo'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: progressionContent
    },
    {
      type: PROGRESSION_FETCH_BESTOF_FAILURE,
      meta: progressionContent,
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);
