import {Dispatch} from 'redux';
import {StoreState} from '../../reducers';
import {ThunkOptions, ViewName} from '../../types/common';
import {
  NavigateBackAction,
  NavigateToAction,
  NAVIGATE_BACK,
  NAVIGATE_TO
} from './navigation.definitions';

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
