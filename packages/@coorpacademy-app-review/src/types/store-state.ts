import {
  FinishedSlidesState,
  NavigationState,
  ReviewStatusState,
  SlidesState,
  StepItemsState,
  TokenState
} from './states';

export type StoreState = {
  courses: unknown;
  navigation: NavigationState;
  slides: SlidesState;
  stepItems: StepItemsState;
  finishedSlides: FinishedSlidesState;
  reviewStatus: ReviewStatusState;
  token: TokenState;
};
