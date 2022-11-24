import {Dispatch} from 'redux';
import {ThunkOptions, AppOptions, ViewName} from '../../types/common';
import type {StoreState} from '../../reducers';

export type NavigateToAction = {
  type: '@@navigation/NAVIGATE_TO';
  payload: ViewName;
};

export type NavigateBackAction = {
  type: '@@navigation/NAVIGATE_BACK';
};

export type StartApp = {
  type: '@@navigation/START_APP';
  payload: AppOptions;
};

export const NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
export const NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';
export const START_APP = '@@navigation/START_APP';

export const navigateTo =
  (newViewName: ViewName) =>
  async (
    dispatch: Dispatch,
    getState: () => StoreState,
    {callbackOnViewChanged}: ThunkOptions
  ): Promise<NavigateToAction> => {
    const action: NavigateToAction = {
      type: NAVIGATE_TO,
      payload: newViewName
    };

    const res = await dispatch(action);

    if (callbackOnViewChanged) {
      callbackOnViewChanged(newViewName);
    }

    return res;
  };

export const navigateBack = async (
  dispatch: Dispatch,
  getState: () => StoreState,
  {callbackOnViewChanged}: ThunkOptions
): Promise<NavigateBackAction> => {
  const action: NavigateBackAction = {
    type: NAVIGATE_BACK
  };

  const res = await dispatch(action);

  if (callbackOnViewChanged) {
    const storeState: StoreState = getState();
    const viewName = storeState.ui.navigation[storeState.ui.navigation.length - 1];
    callbackOnViewChanged(viewName);
  }

  return res;
};
