import {AnswerUI} from '../slides';
import {State as SkillsState} from '../../reducers/skills';

export type DataState = {
  isFetching?: boolean;
  slideValidationResult?: {
    slideNumber: number;
    result: 'success' | 'failure';
    // pass down the successExitNode if all slides are finished, not before
    exitNode?: 'successExitNode' | 'failExitNode';
    nextSlide: {
      questionText?: string;
      answerUI?: AnswerUI;
    };
  };
  skills: SkillsState;
  token?: string;
};
