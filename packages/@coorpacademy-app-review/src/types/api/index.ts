import {AnswerUI} from '../slides';

export type ApiState = {
  entities: {
    isFetching?: boolean;
    slideValidationResult?: {
      slideNumber: number;
      result: 'success' | 'failure';
      exitNode?: 'successExitNode' | 'failExitNode';
      nextSlide: {
        questionText?: string;
        answerUI?: AnswerUI;
      };
    };
  };
};
