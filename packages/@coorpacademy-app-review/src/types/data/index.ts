import {AnswerUI} from '../slides';
import {State as SkillsState} from '../../reducers/data/skills';
import {State as TokenState} from '../../reducers/data/token';

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
  token?: TokenState;
};
