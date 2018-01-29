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
): MoveAction => {
  const {nextContent, instructions} = computeNextStep(
    engine,
    engineOptions,
    null,
    availableContent,
    null
  );
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
): AnswerAction => {
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

  const {nextContent, instructions, isCorrect} = computeNextStep(
    engine,
    engineOptions,
    state,
    availableContent,
    actionWithIsCorrect
  );
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
): ExtraLifeAcceptedAction => {
  const partialAnswerAction: PartialExtraLifeAcceptedAction = {type: 'extraLifeAccepted'};
  const {nextContent, instructions} = computeNextStep(
    engine,
    engineOptions,
    state,
    availableContent,
    partialAnswerAction
  );
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

export default computeNextStep;
