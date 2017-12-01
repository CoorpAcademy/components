import {openGame} from './actions/ui/games';

const start = ({progressionId, userId}, {dispatch}) => {
  /* istanbul ignore if  */

  return dispatch(openGame(progressionId, userId));
};

export default start;
