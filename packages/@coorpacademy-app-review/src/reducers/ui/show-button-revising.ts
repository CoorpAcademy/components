import {
  SHOW_BUTTON_REVISING,
  ShowButtonRevisingAction
} from '../../actions/ui/show-button-revising';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type UIShowButtonRevisingState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIShowButtonRevisingState = false,
  action: ShowButtonRevisingAction | FetchProgression
): UIShowButtonRevisingState => {
  switch (action.type) {
    case SHOW_BUTTON_REVISING: {
      return true;
    }
    case POST_PROGRESSION_REQUEST: {
      return false;
    }
    default:
      return state;
  }
};

export default reducer;
