import {getOr} from 'lodash/fp';
import {PROGRESSION_CLOSE_ERROR_POPIN} from '@coorpacademy/player-store';

const mapStateToErrorPopinProps = ({dispatch}) => {
  return state => {
    if (getOr(false, 'data.progressions.isFailure', state))
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
