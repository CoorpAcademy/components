import {POLL_START} from './middlewares/polling-saga';
import {selectRoute} from './actions/ui/route';
import {selectProgression} from './actions/ui/progressions';
import {selectCurrentUser} from './actions/ui/users';
import {showQuestion} from './utils/state-extract';

const start = async ({progressionId}, {getState, dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  await dispatch(selectCurrentUser());
  await dispatch(selectProgression(progressionId));

  const startRoute = showQuestion(getState()) ? 'question' : 'race';
  await dispatch(selectRoute(startRoute));

  return dispatch({type: POLL_START, meta: {progressionId}});
};

export default start;
