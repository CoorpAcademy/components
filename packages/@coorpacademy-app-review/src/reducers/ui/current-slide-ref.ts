import {SET_CURRENT_SLIDE, UISlidesAction} from '../../actions/ui/slides';

export type CurrentSlideRefState = string;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CurrentSlideRefState = '',
  action: UISlidesAction
): CurrentSlideRefState => {
  console.log('CurrentSlideRefState--->', action, state);
  switch (action.type) {
    case SET_CURRENT_SLIDE: {
      return action.payload.id;
    }
    default:
      return state;
  }
};

export default reducer;
