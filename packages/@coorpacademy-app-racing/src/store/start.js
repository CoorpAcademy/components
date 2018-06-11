import {waitForRefresh} from './actions/api/progressions';
import {selectRoute} from './actions/ui/route';
import {selectProgression} from './actions/ui/progressions';
import {selectCurrentUser} from './actions/ui/users';

const start = async ({progressionId}, {getState, dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  await dispatch(selectCurrentUser());
  await dispatch(waitForRefresh(progressionId));
  await dispatch(selectProgression(progressionId));
  return dispatch(selectRoute('race'));
};

export default start;
