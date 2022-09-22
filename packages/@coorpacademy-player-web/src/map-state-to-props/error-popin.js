import {some, get, getOr, pipe, values} from 'lodash/fp';
import {PROGRESSION_CLOSE_ERROR_POPIN} from '@coorpacademy/player-store';

const mapStateToErrorPopinProps = ({dispatch}) => {
  return state => {
    const isFailure = pipe(get('data'), values, some('isFailure'))(state)
    console.log({isFailure, state})
    if (isFailure)
      return {
        content: 'An unexpected error has occurred',
        icon: 'AlertDiamond',
        mode: 'alert',
        descriptionText: 'Please reload the page and try again',
        firstButton: {
          largeButton: true,
          label: 'Reload',
          type: 'primary',
          'aria-label': 'Reload',
          handleOnClick: () => window.location.reload()
        },
        onClose: () => dispatch({type: PROGRESSION_CLOSE_ERROR_POPIN})
      };
    return;
  };
};

export default mapStateToErrorPopinProps;
