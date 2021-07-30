// @flow strict

import {assign, set, update, isNull, get, unset, pipe} from 'lodash/fp';
import type {Progression, ProgressionId} from '@coorpacademy/progression-engine';
import {
  PROGRESSION_CREATE_SUCCESS,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_FAILURE,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_REQUEST_CLUE_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS
} from '../../actions/api/progressions';
import type {Action} from '../../actions/api/progressions';

type DataProgressionState = {
  entities: {
    [id: ProgressionId]: Progression
  }
};

const dataProgressionsReducer = (
  state: DataProgressionState = {entities: {}},
  action: Action
): DataProgressionState => {
  switch (action.type) {
    case PROGRESSION_FETCH_SUCCESS: {
      const payload: Progression = action.payload;

      if (!action.meta || !action.meta.id) {
        return state;
      }

      const id: ProgressionId = action.meta.id;
      return set(['entities', id], payload, state);
    }

    case PROGRESSION_FETCH_REQUEST: {
      if (!action.meta || !action.meta.id) {
        return state;
      }

      const id: ProgressionId = action.meta.id;
      return update(
        ['entities', id],
        (progression: Progression): null | Progression => progression || null,
        state
      );
    }

    case PROGRESSION_CREATE_ANSWER_REQUEST: {
      if (!action.meta || !action.meta.progressionId) {
        return state;
      }

      const progressionId: ProgressionId = action.meta.progressionId;
      return set(['entities', progressionId, 'state', 'isCorrect'], null, state);
    }
    case PROGRESSION_CREATE_SUCCESS: {
      const progression: Progression = action.payload;
      const id: ProgressionId = progression._id || '_no-id';
      return set(['entities', id], progression, state);
    }
    case PROGRESSION_REQUEST_CLUE_SUCCESS:
    case PROGRESSION_RESOURCE_VIEWED_SUCCESS:
    case PROGRESSION_EXTRALIFEREFUSED_SUCCESS:
    case PROGRESSION_EXTRALIFEACCEPTED_SUCCESS:
    case PROGRESSION_CREATE_ANSWER_SUCCESS: {
      const payload: Progression = action.payload;
      if (!action.meta || !action.meta.progressionId) {
        return state;
      }

      const progressionId: ProgressionId = action.meta.progressionId;

      return update(
        ['entities', progressionId],
        progression => assign(progression, payload),
        state
      );
    }
    case PROGRESSION_FETCH_FAILURE: {
      if (!action.meta || !action.meta.id) {
        return state;
      }

      const id: ProgressionId = action.meta.id;

      if (pipe(get(['entities', id]), isNull)(state)) return unset(['entities', id], state);
      return state;
    }
    default:
      return state;
  }
};

export type {DataProgressionState};
export default dataProgressionsReducer;
