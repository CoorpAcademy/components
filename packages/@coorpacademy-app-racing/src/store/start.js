import {selectRoute, launchStartTimer} from './actions/ui/route';
import {selectProgression} from './actions/ui/progressions';
import {selectCurrentUser} from './actions/ui/users';
import {startPolling} from './middlewares/polling-saga';

const start = async ({progressionId}, {getState, dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  await dispatch(selectCurrentUser());
  await dispatch(selectRoute('race'));
  dispatch(launchStartTimer);
  await dispatch(selectProgression(progressionId));
  return dispatch(startPolling(progressionId));
};

export default start;
