import {ActionCreator} from 'redux';
import {AppOptions} from '..';

export const NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
export const NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';
export const START_APP = '@@navigation/START_APP';

export type $NAVIGATE_TO = {
  type: '@@navigation/NAVIGATE_TO';
  payload: string;
};

export type $NAVIGATE_BACK = {
  type: '@@navigation/NAVIGATE_BACK';
};

export type $START_APP = {
  type: '@@navigation/START_APP';
  payload: AppOptions;
};

export const navigateTo: ActionCreator<$NAVIGATE_TO> = (newPath: string) => ({
  type: NAVIGATE_TO,
  payload: newPath
});

export const navigateBack: ActionCreator<$NAVIGATE_BACK> = () => ({
  type: NAVIGATE_BACK
});

export const startApp = (options: AppOptions): $START_APP => ({
  type: START_APP,
  payload: options
});
