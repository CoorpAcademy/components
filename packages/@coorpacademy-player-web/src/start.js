import {selectProgression} from '@coorpacademy/player-store';

const start = ({progression}, {dispatch}) => {
  return dispatch(selectProgression(progression));
};

export default start;
