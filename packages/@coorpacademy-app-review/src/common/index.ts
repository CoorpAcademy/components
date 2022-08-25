export const VIEWS: {
  readonly skills: 'skills';
  readonly onboarding: 'onboarding';
  readonly slides: 'slides';
} = {
  skills: 'skills',
  onboarding: 'onboarding',
  slides: 'slides'
};

export const slideIndexes = ['0', '1', '2', '3', '4'] as const;

export type SlideIndexes = typeof slideIndexes[number];
