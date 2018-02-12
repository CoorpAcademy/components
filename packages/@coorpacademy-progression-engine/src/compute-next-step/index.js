// @flow
import type {
  AnswerAction,
  AvailableContent,
  Config,
  ExtraLifeAcceptedAction,
  ExtraLifeRefusedAction,
  MoveAction,
  State,
  Slide
} from '../types';
import checkAnswer from '../check-answer';
import computeNextStep from './compute-next-step';

export const computeInitialStep = (
  config: Config,
  availableContent: AvailableContent
): MoveAction | null => {
  const initialStep = computeNextStep(config, null, availableContent, null);
  if (!initialStep) {
    return null;
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
  action: AnswerAction
): AnswerAction | null => {
  const answerIsCorrect =
    action.payload.godMode || checkAnswer(config, currentSlide.question, action.payload.answer);

  const actionWithIsCorrect: AnswerAction = {
    type: 'answer',
    payload: {
      answer: action.payload.answer,
      content: action.payload.content,
      nextContent: action.payload.content,
      godMode: action.payload.godMode,
      isCorrect: answerIsCorrect,
      instructions: null
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
  const partialAnswerAction: ExtraLifeAcceptedAction = {
    type: 'extraLifeAccepted',
    payload: {
      content: state.nextContent,
      nextContent: state.nextContent,
      instructions: null
    }
  };
  const stepResult = computeNextStep(config, state, availableContent, partialAnswerAction);
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
