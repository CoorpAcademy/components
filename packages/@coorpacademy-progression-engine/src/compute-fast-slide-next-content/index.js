// @flow

import {pipe, get, map, min, multiply, size, sum} from 'lodash/fp';

import type {Config, AvailableContent} from '../types';
import type {FastSlideNextContent} from './types';

const getFastSlideExitNode = (
  config: Config,
  godMode: boolean,
  availableContent: AvailableContent
): FastSlideNextContent => {
  const {slidesToComplete, starsPerCorrectAnswer} = config;
  const nextContent = godMode
    ? {
        type: 'success',
        ref: 'successExitNode'
      }
    : {
        type: 'failure',
        ref: 'failExitNode'
      };

  const starsMax = pipe(
    map(pipe(get('slides'), size, length => min([length, slidesToComplete]))),
    sum,
    multiply(starsPerCorrectAnswer)
  )(availableContent);

  const instructions = godMode
    ? [
        {
          field: 'stars',
          type: 'set',
          value: starsMax
        }
      ]
    : [
        {
          field: 'lives',
          type: 'set',
          value: 0
        }
      ];
  return {
    instructions,
    nextContent
  };
};

export default getFastSlideExitNode;
