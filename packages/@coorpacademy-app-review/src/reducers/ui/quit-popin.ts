import {CLOSE_POPIN, OPEN_POPIN, QuitPopinAction} from '../../actions/ui/quit-popin';

export type ShowQuitPopinState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ShowQuitPopinState = false, // default value
  action: QuitPopinAction
): ShowQuitPopinState => {
  switch (action.type) {
    case CLOSE_POPIN:
    case OPEN_POPIN: {
      return action.payload.showQuitPopin;
    }
    default:
      return state;
  }
};

export default reducer;
