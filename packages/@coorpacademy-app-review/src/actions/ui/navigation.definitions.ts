import {AppOptions, ViewName} from '../../types/common';

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
