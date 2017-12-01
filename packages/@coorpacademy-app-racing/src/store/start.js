import {joinTeam} from './actions/api/progressions';

const start = ({progression}, {dispatch}) => {
  /* istanbul ignore if  */

  return dispatch(joinTeam(progression));
};

export default start;
