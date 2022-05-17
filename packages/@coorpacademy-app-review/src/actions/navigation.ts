import {ActionCreator} from 'redux';

export const NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
export const NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';

export type $NAVIGATE_TO = {
  type: '@@navigation/NAVIGATE_TO';
  payload: string;
};

export type $NAVIGATE_BACK = {
  type: '@@navigation/NAVIGATE_BACK';
};

export const navigateTo: ActionCreator<$NAVIGATE_TO> = (newPath: string) => ({
  type: NAVIGATE_TO,
  payload: newPath
});

export const navigateBack: ActionCreator<$NAVIGATE_BACK> = () => ({
  type: NAVIGATE_BACK
});
