import get from 'lodash/fp/get';
import curryN from 'lodash/fp/curryN';
import {fetchProgression, createAnswer} from './progressions';
import {fetchSlide} from './slides';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const selectProgression = curryN(
  4,
  async ({api = ''} = {}, dispatch, getState, {id = '0'}) => {
    await dispatch({
      type: UI_SELECT_PROGRESSION,
      payload: {
        id
      }
    });
    const progressionId = get('ui.current.progressionId', getState()); // eslint-disable-line lodash-fp/no-chain
    await fetchProgression({api}, dispatch, getState, progressionId);
    const progression = get(`data.progressions.entities.${progressionId}`, getState()); // eslint-disable-line lodash-fp/no-chain
    await fetchSlide({api}, dispatch, getState, progression.contentRef);
  }
);

export const UI_ANSWER_PROGRESSION = '@@ui/ANSWER_PROGRESSION';

export const answerProgression = curryN(
  4,
  async ({api = ''} = {}, dispatch, getState, {id = '0', body = {}}) => {
    await dispatch({
      type: UI_ANSWER_PROGRESSION,
      payload: {
        id,
        body
      }
    });
    await createAnswer({api}, dispatch, getState, {id, body});
    const progression = get(`data.progressions.entities.${id}`, getState()); // eslint-disable-line lodash-fp/no-chain
    await fetchSlide({api}, dispatch, getState, progression.contentRef);
  }
);
