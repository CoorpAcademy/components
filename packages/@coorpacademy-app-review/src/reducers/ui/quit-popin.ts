import {closeQuitPopin, CLOSE_POPIN, openQuitPopin, OPEN_POPIN} from '../../actions/ui/quit-popin';

export type ShowQuitPopinState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ShowQuitPopinState = false,
  action: typeof openQuitPopin | typeof closeQuitPopin
): ShowQuitPopinState => {
  switch (action.type) {
    case OPEN_POPIN: {
      return true;
    }
    case CLOSE_POPIN: {
      return false;
    }
    default:
      return state;
  }
};

export default reducer;
