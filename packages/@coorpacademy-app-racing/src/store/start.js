import {START_TIMER} from 'redux-timer';
import {waitForRefresh} from './actions/api/progressions';
import {selectProgression} from './actions/ui/progressions';
import {selectCurrentUser} from './actions/ui/users';

const start = async ({progressionId}, {getState, dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  dispatch({
    type: START_TIMER,
    payload: {
      name: 'raceRefreshTimer',
      action: async () => {
        const state = getState();
        console.log(state);
      },
      interval: 1000,
      runImmediately: false
    }
  });

  dispatch(waitForRefresh(progressionId));
  await dispatch(selectCurrentUser());
  return dispatch(selectProgression(progressionId));
};

export default start;
