import {State as SkillsState} from '../reducers/data/skills';
import {State as SlidesState} from '../reducers/data/slides';
import {State as TokenState} from '../reducers/data/token';
import {State as NavigationState} from '../reducers/ui/navigation';
import {State as ReviewStatusState} from '../reducers/ui/review-status';
import {StepItems as StepItemsState} from '../reducers/ui/step-items';
import {FinishedSlides as FinishedSlidesState} from '../reducers/ui/finished-slides';

import {AnswerUI} from './slides';

type DataState = {
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
  slides: SlidesState;
  token?: TokenState;
};

export type StoreState = {
  ui: {
    navigation: NavigationState;
    stepItems: StepItemsState;
    finishedSlides: FinishedSlidesState;
    reviewStatus: ReviewStatusState;
  };
  data: DataState;
};
