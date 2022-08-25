import {SetValidateButtonStatus, SET_VALIDATE_BUTTON_STATUS} from '../../actions/ui/slides';

export type UISlideState = {
  validateButton: boolean;
};

export const initialState: UISlideState = {validateButton: false};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UISlideState = initialState,
  action: SetValidateButtonStatus
): UISlideState => {
  switch (action.type) {
    case SET_VALIDATE_BUTTON_STATUS: {
      return {validateButton: action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
