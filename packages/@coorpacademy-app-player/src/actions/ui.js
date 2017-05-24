import get from 'lodash/fp/get';
import {fetchProgression} from './progressions';
import {createAnswer} from './answers';
import {fetchSlide} from './slides';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const selectProgression = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_SELECT_PROGRESSION,
    payload: {
      id
    }
  });

  const progressionId = get('ui.current.progressionId', getState()); // eslint-disable-line lodash-fp/no-chain
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  const progression = get(`data.progressions.entities.${progressionId}`, getState()); // eslint-disable-line lodash-fp/no-chain
  return dispatch(fetchSlide(progression.content.ref));
};

export const answerProgression = (id, body) => async (dispatch, getState) => {
  const response = await dispatch(createAnswer(id, body));
  if (response.error) return response;

  const progression = get(`data.progressions.entities.${id}`, getState()); // eslint-disable-line lodash-fp/no-chain
  await dispatch(fetchSlide(progression.contentRef));
};

export const ANSWER_EDIT = '@@answer/EDIT';

export const editAnswer = questionType => (progressionId, answer) => ({
  type: ANSWER_EDIT,
  meta: {
    id: answer.id,
    progressionId
  },
  payload: {
    answer,
    questionType
  }
});

export const ANSWER_RESET = '@@answer/RESET';

export const resetAnswer = progressionId => ({
  type: ANSWER_RESET,
  meta: {
    progressionId
  },
  payload: {}
});

export const validateAnswer = (progressionId, body) => async (dispatch, getState) => {
  const response = await dispatch(createAnswer(progressionId, body));
  if (response.error) return response;

  await dispatch(resetAnswer(progressionId));
  return dispatch(selectProgression(`${(parseInt(progressionId) + 1) % 2}`));
};
