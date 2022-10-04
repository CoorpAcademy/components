import {AppOptions, ViewName} from '../../types/common';

export const NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
export const NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';
export const START_APP = '@@navigation/START_APP';

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

export const navigateTo = (newViewName: ViewName): NavigateToAction => ({
  type: NAVIGATE_TO,
  payload: newViewName
});

export const navigateBack: NavigateBackAction = {
  type: NAVIGATE_BACK
};
