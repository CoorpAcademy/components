import {POLL_START} from './middlewares/polling-saga';
import {selectRoute, launchStartTimer} from './actions/ui/route';
import {selectProgression} from './actions/ui/progressions';
import {selectCurrentUser} from './actions/ui/users';
import {isStarter} from './utils/state-extract';

const start = async ({progressionId}, {getState, dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  await dispatch(selectCurrentUser());
  await dispatch(selectProgression(progressionId));
  await dispatch(selectRoute('race'));

  const state = getState();
  if (isStarter(state)) {
    await dispatch(launchStartTimer);
  }

  return dispatch({type: POLL_START, meta: {progressionId}});
};

export default start;
