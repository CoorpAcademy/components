import {StoreState} from '../reducers';
import {Services} from '../types/common';

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

export type Options<ActionTypes = readonly [string, string, string]> = {
  services: Services;
  types?: ActionTypes;
  bailout?: (state: StoreState) => boolean;
};
