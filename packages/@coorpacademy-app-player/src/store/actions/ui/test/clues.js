import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {getClue, selectClue} from '../clues';
import {UI_SELECT_ROUTE} from '../route';
import {
  PROGRESSION_REQUEST_CLUE_REQUEST,
  PROGRESSION_REQUEST_CLUE_SUCCESS
} from '../../api/progressions';
import {CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS} from '../../api/clues';

test(
  'should set state with selected clue',
  macro,
  set('ui.current.progressionId', 'foo')({}),
  t => ({}),
  selectClue,
  [
    {
      type: UI_SELECT_ROUTE,
      meta: {progressionId: 'foo'},
      payload: 'clue'
    }
  ],
  0
);

test(
  'should unlock and fetch clue',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.state.nextContent.ref', 'bar'),
    set('data.contents.slide.entities.bar._id', 'bar')
  )({}),
  t => ({
    Progressions: {
      requestClue: (progressionId, payload) => {
        t.is(progressionId, 'foo');
        t.deepEqual(payload, {
          content: {
            ref: 'bar',
            type: 'slide'
          }
        });

        return set('state.requestdClues', ['bar'], {});
      }
    },
    Clues: {
      findById: (progressionId, slideId) => {
        t.is(progressionId, 'foo');
        t.is(slideId, 'bar');
        return ['Clue'];
      }
    }
  }),
  getClue,
  [
    {
      type: PROGRESSION_REQUEST_CLUE_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_REQUEST_CLUE_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: set('state.requestdClues', ['bar'], {})
    },
    {
      type: CLUE_FETCH_REQUEST,
      meta: {
        progressionId: 'foo',
        slideId: 'bar'
      }
    },
    {
      type: CLUE_FETCH_SUCCESS,
      meta: {
        progressionId: 'foo',
        slideId: 'bar'
      },
      payload: ['Clue']
    }
  ],
  4
);

test(
  'should unlock and fetch clue',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.state.nextContent.ref', 'bar'),
    set('data.contents.slide.entities.bar._id', 'bar')
  )({}),
  t => ({
    Progressions: {
      requestClue: (progressionId, payload) => {
        t.is(progressionId, 'foo');
        t.deepEqual(payload, {
          content: {
            ref: 'bar',
            type: 'slide'
          }
        });
        return set('state.requestdClues', ['bar'], {});
      }
    },
    Clues: {
      findById: (progressionId, slideId) => {
        t.is(progressionId, 'foo');
        t.is(slideId, 'bar');
        return ['Clue'];
      }
    }
  }),
  getClue,
  [
    {
      type: PROGRESSION_REQUEST_CLUE_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_REQUEST_CLUE_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: set('state.requestdClues', ['bar'], {})
    },
    {
      type: CLUE_FETCH_REQUEST,
      meta: {
        progressionId: 'foo',
        slideId: 'bar'
      }
    },
    {
      type: CLUE_FETCH_SUCCESS,
      meta: {
        progressionId: 'foo',
        slideId: 'bar'
      },
      payload: ['Clue']
    }
  ],
  4
);
