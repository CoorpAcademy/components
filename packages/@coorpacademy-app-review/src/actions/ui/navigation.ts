import {AppOptions} from '../../types/common';

export const NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
export const NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';
export const START_APP = '@@navigation/START_APP';

export type ViewPath = 'skills' | 'onboarding' | 'slides' | undefined;

export type NavigateTo = {
  type: '@@navigation/NAVIGATE_TO';
  payload: ViewPath;
};

export type NavigateBack = {
  type: '@@navigation/NAVIGATE_BACK';
};

export type StartApp = {
  type: '@@navigation/START_APP';
  payload: AppOptions;
};

export const navigateTo = (newPath: ViewPath): NavigateTo => ({
  type: NAVIGATE_TO,
  payload: newPath
});

export const navigateBack = (): NavigateBack => ({
  type: NAVIGATE_BACK
});
