import {Slides} from './slides';
import {NavigationState, TokenState} from './states';

export type StoreState = {
  navigation: NavigationState;
  slides: Slides;
  token: TokenState;
  courses: unknown;
};
