// @flow

import {concat, remove, uniq} from 'lodash/fp';
import type {Action, AnswerAction, Config, State} from '../types';

export default function pendingSlides(
  config: Config
): (Array<string>, Action, State) => Array<string> {
  return (
    pendingSlidesToReview: Array<string> = [],
    action: Action,
    state: State
  ): Array<string> => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        const isCorrect = answerAction.payload.isCorrect;
        const slideRef = answerAction.payload.content.ref;

        const pendingSlideRefs = isCorrect
          ? remove(slideRef, pendingSlidesToReview)
          : uniq(concat(pendingSlidesToReview, [answerAction.payload.content.ref]));

        return pendingSlideRefs;
      }
      default:
        return pendingSlidesToReview;
    }
  };
}
