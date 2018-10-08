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
  await dispatch(selectProgression(progressionId));
  await dispatch(startPolling(progressionId));
  return dispatch(launchStartTimer);
};

export default start;
