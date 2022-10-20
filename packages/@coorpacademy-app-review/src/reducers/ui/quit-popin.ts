import {closeQuitPopin, CLOSE_POPIN, openQuitPopin, OPEN_POPIN} from '../../actions/ui/quit-popin';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type ShowQuitPopinState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ShowQuitPopinState = false,
  action: typeof openQuitPopin | typeof closeQuitPopin | FetchProgression
): ShowQuitPopinState => {
  switch (action.type) {
    case OPEN_POPIN: {
      return true;
    }
    case CLOSE_POPIN:
    case POST_PROGRESSION_REQUEST: {
      return false;
    }
    default:
      return state;
  }
};

export default reducer;
