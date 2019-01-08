// @flow strict

import set from 'lodash/fp/set';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';
import type {SelectAction} from '../../actions/ui/progressions';

type UiCurrentState = {
  progressionId: string | null
};

const uiCurrentReducer = (
  state: UiCurrentState = {progressionId: null},
  action: Action
): UiCurrentState => {
  switch (action.type) {
    case UI_SELECT_PROGRESSION: {
      const selectAction = (action: SelectAction);
      const payload = selectAction.payload;
      const {id} = payload;
      return set('progressionId', id, state);
    }
    default:
      return state;
  }
};

export type {UiCurrentState};
export default uiCurrentReducer;
