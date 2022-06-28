import {
  DataState,
  FinishedSlidesState,
  NavigationState,
  ReviewStatusState,
  SlidesState,
  StepItemsState
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
  data: DataState;
};
