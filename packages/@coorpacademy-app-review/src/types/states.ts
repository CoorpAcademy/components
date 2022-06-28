export {Slides as SlidesState} from './slides';
export {DataState} from './data';
export {StepItems as StepItemsState} from './step-items';
export {FinishedSlides as FinishedSlidesState} from './finished-slides';
export {State as ReviewStatusState} from '../reducers/review-status';
export type NavigationState = Array<'home' | 'onboarding' | 'slides'>;
