// @flow strict

import {set} from 'lodash/fp';
import {UI_PROGRESSION_ACTION_TYPES} from '../../actions/ui/progressions';
import type {Action} from '../../definitions/redux';
import type {SelectAction} from '../../actions/ui/progressions';

type UiCurrentState = {
  progressionId: string | null
};

const uiCurrentReducer = (
  state: UiCurrentState = {progressionId: null},
  action: Action
): UiCurrentState => {
  if (action.type === UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION) {
    // $FlowFixMe with this type, this is a SelectAction
    const selectAction = (action: SelectAction);
    const payload = selectAction.payload;
    const {id} = payload;
    return set('progressionId', id, state);
  } else {
    return state;
  }
};

export type {UiCurrentState};
export default uiCurrentReducer;
