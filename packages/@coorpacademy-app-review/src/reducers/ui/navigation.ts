import {
  type NavigateTo,
  type NavigateBack,
  NAVIGATE_BACK,
  NAVIGATE_TO
} from '../../actions/ui/navigation';

// -----------------------------------------------------------------------------

export type NavigationState = Array<'skills' | 'onboarding' | 'slides'>;
export const initialState: NavigationState = [];

// -----------------------------------------------------------------------------

const reducer = (
  // eslint-disable-next-line default-param-last
  state: NavigationState = initialState,
  action: NavigateTo | NavigateBack
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

// -----------------------------------------------------------------------------

export default reducer;
