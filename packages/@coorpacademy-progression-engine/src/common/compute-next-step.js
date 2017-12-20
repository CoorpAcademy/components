// @flow
import has from 'lodash/fp/has';
import get from 'lodash/fp/get';
import learnerNextStepForAnswer from '../engines/learner/answer-next-step';
import learnerNextStepForExtraLife from '../engines/learner/extra-life-next-step';
import adaptiveNextStepForAnswer from '../engines/adaptive/answer-next-step';
import type {Progression, NextStepParams, NextStepPayload} from './types';

const getComputer = (
  progression: Progression,
  params: NextStepParams
): ((progression: Progression, params: NextStepParams) => NextStepPayload) => {
  const engineRef = get('engine.ref', progression);

  if (!engineRef) {
    throw new Error('Bad format for Progression');
  }

  switch (engineRef) {
    case 'learner':
    case 'microlearning': {
      if (has('isAccepted', params)) {
        /*
          to check:
            params.slidePools
         */
        return learnerNextStepForExtraLife;
      }
      if (has('chapterRules', params)) {
        /*
          to check:
            params.answer
            params.currentSlide
         */
        return adaptiveNextStepForAnswer;
      }
      if (has('slidePools', params)) {
        /*
          to check:
            params.answer
            params.currentSlide
            params.slidePools
         */
        return learnerNextStepForAnswer;
      }
      throw new Error('Could not find any computer for those params');
    }
    default: {
      throw new Error(`Unknown engine ${progression.engine.ref}`);
    }
  }
};

export default function computeNextStep(
  progression: Progression,
  params: NextStepParams
): NextStepPayload {
  const computer = getComputer(progression, params);
  return computer(progression, params);
}
