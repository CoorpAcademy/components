import {NavigationState, SlidesState, TokenState} from './states';

export type StoreState = {
  navigation: NavigationState;
  slides: SlidesState;
  token: TokenState;
  courses: unknown;
};
