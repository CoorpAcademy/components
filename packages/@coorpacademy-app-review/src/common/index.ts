import _toString from 'lodash/fp/toString';

export const TOTAL_SLIDES_STACK = 5;
export const HIGHEST_INDEX = TOTAL_SLIDES_STACK - 1;

export const VIEWS: {
  readonly skills: 'skills';
  readonly onboarding: 'onboarding';
  readonly slides: 'slides';
} = {
  skills: 'skills',
  onboarding: 'onboarding',
  slides: 'slides'
};

export const slideNumbers = ['0', '1', '2', '3', '4'] as const;

export type SlideNumbers = typeof slideNumbers[number];

export const indexToString = (index: number): SlideNumbers => _toString(index) as SlideNumbers;
