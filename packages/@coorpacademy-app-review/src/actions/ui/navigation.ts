export const NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
export const NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';

export type ViewPath = 'skills' | 'onboarding' | 'slides';

export type NavigateTo = {
  type: '@@navigation/NAVIGATE_TO';
  payload: ViewPath;
};

export type NavigateBack = {
  type: '@@navigation/NAVIGATE_BACK';
};

export const navigateTo = (newPath: ViewPath): NavigateTo => ({
  type: NAVIGATE_TO,
  payload: newPath
});

export const navigateBack = (): NavigateBack => ({
  type: NAVIGATE_BACK
});
