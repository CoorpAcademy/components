import {selectProgression, setRedirectUrlEnd} from '@coorpacademy/player-store';

const start = ({progression}, {dispatch}) => {
  dispatch(setRedirectUrlEnd());
  return dispatch(selectProgression(progression));
};

export default start;
