export {Slides as SlidesState} from './slides';
export {ApiState} from './api';
export {StepItems as StepItemsState} from './step-items';
export {FinishedSlides as FinishedSlidesState} from './finished-slides';
export {State as ReviewStatusState} from '../reducers/review-status';
export type TokenState = string;
export type NavigationState = Array<'home' | 'onboarding' | 'slides'>;
