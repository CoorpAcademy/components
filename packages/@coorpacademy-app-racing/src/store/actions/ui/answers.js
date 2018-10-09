import get from 'lodash/fp/get';
import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {
  getCurrentUserState,
  getStepContent,
  isLastAnswerCorrect,
  getVictors
} from '../../utils/state-extract';
import {fetchContent} from '../api/contents';
import {createAnswer} from '../api/progressions';
import {stopPolling} from '../../middlewares/polling-saga';
import {syncProgression} from './progressions';
import {seeQuestion} from './location';
import {selectRoute} from './route';

export const TIMER_NEXT_QUESTION_ON = '@@timer/next-question/on';
export const TIMER_NEXT_QUESTION_OFF = '@@timer/next-question/off';

export const TIMER_HIGHLIGHT_ON = '@@timer/highlight/on';
export const TIMER_HIGHLIGHT_OFF = '@@timer/highlight/off';

const TIMER_TEAMMATE_HIGHLIGHT_ON = '@@timer/teammate-highlight/on';
const TIMER_TEAMMATE_HIGHLIGHT_OFF = '@@timer/teammate-highlight/off';

export const TIMER_DISPLAY_BAD_ON = '@@timer/bad-on';
export const TIMER_DISPLAY_BAD_OFF = '@@timer/bad-off';

export const TIMER_DISPLAY_DROP_ON = '@@timer/drop-on';
export const TIMER_DISPLAY_DROP_OFF = '@@timer/drop-off';

const TIMING_NEXT_QUESTION = 3000;
const TIMING_BEFORE_DROP = 1500;
const TIMING_DROP = 700;
const TIMING_HIGHLIGHT = TIMING_BEFORE_DROP + TIMING_DROP;

export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  qcmGraphic: '@@answer/EDIT_QCM_GRAPHIC',
  qcmDrag: '@@answer/EDIT_QCM_DRAG',
  template: '@@answer/EDIT_TEMPLATE',
  basic: '@@answer/EDIT_BASIC',
  slider: '@@answer/EDIT_SLIDER'
};

const newState = (state = [], questionType, newValue) => {
  switch (questionType) {
    case 'qcm':
    case 'qcmGraphic':
    case 'qcmDrag':
      if (!newValue.label) return state;

      if (includes(newValue.label, state)) {
        return remove(label => label === newValue.label)(state);
      } else {
        return [...state, newValue.label];
      }

    case 'basic':
    case 'slider':
      return [newValue];

    case 'template':
      return newValue;
  }
};

export const editAnswer = (state, questionType, progressionId, newValue) => {
  const type = ANSWER_EDIT[questionType];
  if (!type) {
    throw new Error('Unknown question type "bar"');
  }
  return {
    type,
    meta: {
      progressionId
    },
    payload: newState(state, questionType, newValue)
  };
};

export const startNextQuestionTimer = (addHighlightTime = false) => async (
  dispatch,
  getState,
  {services}
) => {
  if (addHighlightTime) {
    await dispatch({
      type: TIMER_TEAMMATE_HIGHLIGHT_ON,
      meta: {time: TIMING_HIGHLIGHT}
    });

    await new Promise(function(resolve) {
      setTimeout(async () => {
        await dispatch({type: TIMER_TEAMMATE_HIGHLIGHT_OFF});
        resolve(true);
      }, TIMING_HIGHLIGHT);
    });
  }

  await dispatch({
    type: TIMER_NEXT_QUESTION_ON,
    meta: {time: TIMING_NEXT_QUESTION}
  });

  return new Promise(async function(resolve) {
    setTimeout(async () => {
      await dispatch({type: TIMER_NEXT_QUESTION_OFF});
      const gameOver = getVictors(getState()) !== null;
      if (!gameOver) {
        await dispatch(seeQuestion);
      }
      resolve(true);
    }, TIMING_NEXT_QUESTION);

    const {ref: slideRef} = getStepContent(getState());
    await dispatch(fetchContent('slide', slideRef));
  });
};

export const validateAnswer = (progressionId, body) => async (dispatch, getState, {services}) => {
  await dispatch(stopPolling(progressionId));
  await dispatch(selectRoute('race'));
  await dispatch(createAnswer(progressionId, body.answer));

  const stateAfterCorrection = getState();
  const userState = getCurrentUserState(stateAfterCorrection);
  const team = get('team', userState);
  const isCorrect = isLastAnswerCorrect(stateAfterCorrection);

  await dispatch({
    type: TIMER_HIGHLIGHT_ON,
    meta: {
      progressionId,
      team,
      isCorrect
    }
  });

  const highlightTime = isCorrect ? TIMING_HIGHLIGHT : 0;

  if (!isCorrect) {
    await dispatch({type: TIMER_DISPLAY_BAD_ON});
    await new Promise(function(resolve) {
      setTimeout(async () => {
        await dispatch({
          type: TIMER_DISPLAY_BAD_OFF,
          meta: {progressionId, team}
        });
        resolve(true);
      }, TIMING_BEFORE_DROP);
    });

    await dispatch({type: TIMER_DISPLAY_DROP_ON});
    await new Promise(function(resolve) {
      setTimeout(async () => {
        await dispatch({
          type: TIMER_DISPLAY_DROP_OFF,
          meta: {progressionId, team}
        });
        resolve(true);
      }, TIMING_DROP);
    });
  }

  return new Promise(function(resolve) {
    setTimeout(async () => {
      await dispatch({
        type: TIMER_HIGHLIGHT_OFF,
        meta: {
          progressionId,
          team
        }
      });

      await dispatch(syncProgression(progressionId));
      resolve(true);
    }, highlightTime);
  });
};
