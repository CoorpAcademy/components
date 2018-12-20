// @flow strict

import type {Content} from '@coorpacademy/progression-engine';
import type {Recommendation} from './definitions';

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

export const openRecommendation = (recommendation: Recommendation) => {
  window.location.reload();
};
