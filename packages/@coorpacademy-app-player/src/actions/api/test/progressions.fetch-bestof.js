import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
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
      findBestOf: (engineRef, contentRef, id) => {
        t.is(engineRef, 'microlearning');
        t.is(contentRef, 'bar');
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
    [
      {
        type: PROGRESSION_FETCH_BESTOF_SUCCESS,
        meta: progressionContent,
        payload: 'baz'
      },
      set('data.contents.chapter.entities.bar.bestScore', 'baz', {})
    ]
  ]
);

test(
  'should prevent request if bestScore already fetched',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {engine, content: {type: 'chapter', ref: 'bar'}}),
    set('data.contents.chapter.entities.bar.bestScore', 12)
  )({}),
  t => ({
    Progressions: {
      findBestOf: (engineRef, contentRef, id) => {
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
  ]
);

test(
  'should return error if request failed',
  macro,
  state,
  t => ({
    Progressions: {
      findBestOf: (engineRef, contentRef, id) => {
        t.is(contentRef, 'bar');
        throw new Error();
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
      payload: new Error()
    }
  ]
);
