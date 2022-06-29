import {AnswerUI} from '../slides';

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
  token?: string;
};
