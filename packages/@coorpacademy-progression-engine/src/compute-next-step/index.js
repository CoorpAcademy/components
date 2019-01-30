import isEmpty from 'lodash/fp/isEmpty';
// @flow
import type {
  Answer,
  AnswerAction,
  AvailableContent,
  Config,
  Content,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction,
  MoveAction,
  State,
  Slide
} from '../types';
import checkAnswer from '../check-answer';
import computeNextStep, {
  type PartialAnswerActionWithIsCorrect,
  type PartialExtraLifeAcceptedAction
} from './compute-next-step';

export type PartialAnswerAction = $ReadOnly<{
  type: 'answer',
  payload: {
    answer: Answer,
    content: Content,
    godMode: boolean
  }
}>;

export const computeInitialStep = (
  config: Config,
  availableContent: AvailableContent = []
): MoveAction => {
  if (isEmpty(availableContent)) return null;
  const initialStep = computeNextStep(config, null, availableContent, null);
  if (!initialStep) {
    return {
      type: 'move',
      payload: {
        nextContent: {
          type: 'success',
          ref: 'successExitNode'
        },
        instructions: null
      }
    };
  }

  const {nextContent, instructions} = initialStep;
  return {
    type: 'move',
    payload: {
      instructions,
      nextContent
    }
  };
};

export const computeNextStepAfterAnswer = (
  config: Config,
  state: State,
  availableContent: AvailableContent,
  currentSlide: Slide,
  action: PartialAnswerAction
): AnswerAction | null => {
  const answerIsCorrect =
    action.payload.godMode || checkAnswer(config, currentSlide.question, action.payload.answer);

  const actionWithIsCorrect: PartialAnswerActionWithIsCorrect = {
    type: 'answer',
    payload: {
      answer: action.payload.answer,
      content: action.payload.content,
      godMode: action.payload.godMode,
      isCorrect: answerIsCorrect
    }
  };

  const stepResult = computeNextStep(config, state, availableContent, actionWithIsCorrect);
  if (!stepResult) {
    return null;
  }

  const {nextContent, instructions, isCorrect} = stepResult;
  return {
    type: 'answer',
    payload: {
      answer: action.payload.answer,
      content: action.payload.content,
      godMode: action.payload.godMode,
      nextContent,
      isCorrect,
      instructions
    }
  };
};

export const computeNextStepOnAcceptExtraLife = (
  config: Config,
  state: State,
  availableContent: AvailableContent
): ExtraLifeAcceptedAction | null => {
  const partialAction: PartialExtraLifeAcceptedAction = {type: 'extraLifeAccepted'};

  const stepResult = computeNextStep(config, state, availableContent, partialAction);
  if (!stepResult) {
    return null;
  }

  const {nextContent, instructions} = stepResult;
  return {
    type: 'extraLifeAccepted',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent,
      instructions
    }
  };
};

export const computeNextStepOnRefuseExtraLife = (
  config: Config,
  state: State
): ExtraLifeRefusedAction => {
  return {
    type: 'extraLifeRefused',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {ref: 'failExitNode', type: 'failure'}
    }
  };
};
