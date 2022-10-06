import type {Middleware} from 'redux';
import {Dispatch} from 'redux';
import {ViewName} from '../types/common';

import {
  NavigateBackAction,
  NavigateToAction,
  NAVIGATE_BACK,
  NAVIGATE_TO
} from '../actions/ui/navigation';

import {StoreState} from '../reducers';

export type Callback = (callbackOnViewChanged: ViewName) => void;
export type OnViewChanged = (
  callbackOnViewChanged: Callback
) => Middleware<{}, StoreState, Dispatch>;

const onViewChanged: OnViewChanged =
  callbackOnViewChanged =>
  ({getState}) =>
  next =>
  (action: NavigateToAction | NavigateBackAction) => {
    if (action.type === NAVIGATE_TO) {
      callbackOnViewChanged(action.payload);
    }

    if (action.type === NAVIGATE_BACK) {
      const storeState: StoreState = getState();
      const viewName = storeState.ui.navigation[storeState.ui.navigation.length - 2];

      callbackOnViewChanged(viewName);
    }

    return next(action);
  };

export default onViewChanged;
