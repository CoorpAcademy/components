import {
  NavigateToAction,
  NavigateBackAction,
  NAVIGATE_TO,
  NAVIGATE_BACK
} from '../../actions/ui/navigation.definitions';

export type NavigationState = Array<'skills' | 'onboarding' | 'slides' | 'loader'>;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: NavigationState = [],
  action: NavigateToAction | NavigateBackAction
): NavigationState => {
  switch (action.type) {
    case NAVIGATE_TO: {
      return [...state, action.payload];
    }
    case NAVIGATE_BACK: {
      const newState = [...state];
      newState.pop();
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
