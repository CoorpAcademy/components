// @flow strict

import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import type {Action} from '../../definitions/redux';

type UiCurrentState = {
  progressionId: string | null
};

type SelectProgressionSuccessPayload = {
  id: string
};

const uiCurrentReducer = (
  state: UiCurrentState = {progressionId: null},
  action: Action
): UiCurrentState => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      const payload: SelectProgressionSuccessPayload = action.payload;
      const {id} = payload;
      return set('progressionId', id, state);
    }
    default:
      return state;
  }
};

export type {SelectProgressionSuccessPayload, UiCurrentState};
export default uiCurrentReducer;
