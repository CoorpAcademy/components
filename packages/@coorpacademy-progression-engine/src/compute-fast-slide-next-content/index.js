// @flow

import {pipe, get, map, min, multiply, size, sum} from 'lodash/fp';

import type {Config, Content} from '../types';
import type {FastSlideNextContent} from './types';

const getFastSlideExitNode = (
  config: Config,
  godMode: boolean,
  availableContent: Content
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

  // $FlowFixMe
  const starsMax = pipe(
    // $FlowFixMe
    map(pipe([get('slides'), size, s => min([s, slidesToComplete])])),
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
