import {waitForRefresh} from './actions/api/progressions';
import {selectProgression} from './actions/ui/progressions';
import {selectCurrentUser} from './actions/ui/users';

const start = async ({progressionId}, {dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  dispatch(waitForRefresh(progressionId));
  await dispatch(selectCurrentUser());
  return dispatch(selectProgression(progressionId));
};

export default start;
