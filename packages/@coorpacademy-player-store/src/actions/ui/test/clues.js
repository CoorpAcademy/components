import test from 'ava';
import {set, pipe} from 'lodash/fp';
import macro from '../../test/helpers/macro';
import {getClue, selectClue} from '../clues';
import {UI_SELECT_ROUTE} from '../route';
import {
  PROGRESSION_REQUEST_CLUE_REQUEST,
  PROGRESSION_REQUEST_CLUE_SUCCESS
} from '../../api/progressions';
import {CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS} from '../../api/clues';
import {PROGRESSION_UPDATED_ON_NODE} from '../../api/analytics';

const slide = {
  ref: 'bar',
  type: 'slide'
};

const setNextContent = set('data.progressions.entities.foo.state.nextContent', slide);

const requestedCluePayload = pipe(
  set('state.requestedClues', ['bar']),
  set('state.nextContent', slide)
)({});

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
    set('data.progressions.entities.foo.engine', {ref: 'microlearning', version: 1}),
    setNextContent,
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.contents.slide.entities.bar._id', 'bar')
  )({}),
  t => ({
    Analytics: {
      sendProgressionFinished: (currentProgression, engineConfig) => {
        t.fail();
      },
      sendProgressionUpdated: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'microlearning');
        t.deepEqual(currentProgression.state.nextContent, {type: 'slide', ref: 'bar'});
        return 'sent';
      }
    },
    Progressions: {
      requestClue: (progressionId, payload) => {
        t.is(progressionId, 'foo');
        t.deepEqual(payload, {
          content: {
            ref: 'bar',
            type: 'slide'
          }
        });

        return requestedCluePayload;
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
      payload: requestedCluePayload
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
    },
    {
      type: PROGRESSION_UPDATED_ON_NODE,
      meta: {
        id: 'foo'
      }
    }
  ],
  6
);
