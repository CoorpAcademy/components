import {openQuitPopinAction, OPEN_POPIN} from '../../actions/ui/quit-popin';

export type ShowQuitPopinState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ShowQuitPopinState = false, // default value
  action: openQuitPopinAction
): ShowQuitPopinState => {
  switch (action.type) {
    case OPEN_POPIN: {
      // eslint-disable-next-line no-console
      return action.payload.showQuitPopin; // mettre la valeur à true
    }
    default:
      return state;
  }
};

export default reducer;
