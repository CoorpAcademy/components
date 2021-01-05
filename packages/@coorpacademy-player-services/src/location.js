/* eslint-disable flowtype-errors/enforce-min-coverage */
// @flow strict

import type {Content} from '@coorpacademy/progression-engine';
import type {RecommendationAPI} from './definitions';

export const exit = () => {
  window.location.reload();
};

export const retry = (contentRef: string) => {
  window.location.reload();
};

export const back = (content: Content) => {
  window.location.reload();
};

export const nextLevel = (contentRef: string) => {
  window.location.reload();
};

export const seeComment = (content: Content) => {
  window.location.reload();
};

export const openRecommendation = (recommendation: RecommendationAPI) => {
  window.location.reload();
};

export const getRedirectURLAfterEnd = (): string => '';
