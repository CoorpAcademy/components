import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {selectClue} from '../clues';
import {UI_SELECT_ROUTE} from '../route';
import {
  PROGRESSION_REQUEST_CLUE_REQUEST,
  PROGRESSION_REQUEST_CLUE_SUCCESS
} from '../../api/progressions';
import {CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS} from '../../api/clues';

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
  selectClue,
  [
    [
      {
        type: UI_SELECT_ROUTE,
        meta: {progressionId: 'foo'},
        payload: 'clue'
      },
      set('ui.route.foo', 'clue', {})
    ],
    [
      {
        type: PROGRESSION_REQUEST_CLUE_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_REQUEST_CLUE_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: set('state.requestdClues', ['bar'], {})
      },
      set('data.progressions.entities.foo.state.requestedClues', ['bar'], {})
    ],
    [
      {
        type: CLUE_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'bar'
        }
      },
      set('api.clues.foo.bar', null, {})
    ],
    [
      {
        type: CLUE_FETCH_SUCCESS,
        meta: {
          progressionId: 'foo',
          slideId: 'bar'
        },
        payload: ['Clue']
      },
      set('api.clues.foo.bar', ['Clue'], {})
    ]
  ]
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
  selectClue,
  [
    [
      {
        type: UI_SELECT_ROUTE,
        meta: {progressionId: 'foo'},
        payload: 'clue'
      },
      set('ui.route.foo', 'clue', {})
    ],
    [
      {
        type: PROGRESSION_REQUEST_CLUE_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_REQUEST_CLUE_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: set('state.requestdClues', ['bar'], {})
      },
      set('data.progressions.entities.foo.state.requestedClues', ['bar'], {})
    ],
    [
      {
        type: CLUE_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'bar'
        }
      },
      set('api.clues.foo.bar', null, {})
    ],
    [
      {
        type: CLUE_FETCH_SUCCESS,
        meta: {
          progressionId: 'foo',
          slideId: 'bar'
        },
        payload: ['Clue']
      },
      set('api.clues.foo.bar', ['Clue'], {})
    ]
  ]
);
