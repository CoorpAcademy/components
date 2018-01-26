// @flow
import type {
  Answer,
  AnswerAction,
  AvailableContent,
  Content,
  Engine,
  EngineOptions,
  State,
  Slide
} from '../types';
import checkAnswer from '../check-answer';
import computeNextStep, {type PartialAnswerActionWithIsCorrect} from './compute-next-step';

export type PartialAnswerAction = $ReadOnly<{
  type: 'answer',
  payload: {
    answer: Answer,
    content: Content,
    godMode: boolean
  }
}>;

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

export default computeNextStep;
