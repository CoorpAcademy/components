import {
  ApiState,
  FinishedSlidesState,
  NavigationState,
  ReviewStatusState,
  SlidesState,
  StepItemsState,
  TokenState
} from './states';

export type StoreState = {
  ui: {
    courses: unknown;
    navigation: NavigationState;
    slides: SlidesState;
    stepItems: StepItemsState;
    finishedSlides: FinishedSlidesState;
    reviewStatus: ReviewStatusState;
  };
  data: {
    token: TokenState;
    api: ApiState;
  };
};
