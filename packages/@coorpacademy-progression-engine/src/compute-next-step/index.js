// @flow
import type {
  Answer,
  AnswerAction,
  AvailableContent,
  Content,
  Engine,
  EngineOptions,
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
  engine: Engine,
  engineOptions: EngineOptions,
  availableContent: AvailableContent
): MoveAction | null => {
  const initialStep = computeNextStep(engine, engineOptions, null, availableContent, null);
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
  engine: Engine,
  engineOptions: EngineOptions,
  state: State,
  availableContent: AvailableContent,
  currentSlide: Slide,
  action: PartialAnswerAction
): AnswerAction | null => {
  const answerIsCorrect =
    action.payload.godMode || checkAnswer(engine, currentSlide.question, action.payload.answer);

  const actionWithIsCorrect: PartialAnswerActionWithIsCorrect = {
    type: 'answer',
    payload: {
      answer: action.payload.answer,
      content: action.payload.content,
      godMode: action.payload.godMode,
      isCorrect: answerIsCorrect
    }
  };

  const stepResult = computeNextStep(
    engine,
    engineOptions,
    state,
    availableContent,
    actionWithIsCorrect
  );
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
  engine: Engine,
  engineOptions: EngineOptions,
  state: State,
  availableContent: AvailableContent
): ExtraLifeAcceptedAction | null => {
  const partialAnswerAction: PartialExtraLifeAcceptedAction = {type: 'extraLifeAccepted'};
  const stepResult = computeNextStep(
    engine,
    engineOptions,
    state,
    availableContent,
    partialAnswerAction
  );
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
  engine: Engine,
  engineOptions: EngineOptions,
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
