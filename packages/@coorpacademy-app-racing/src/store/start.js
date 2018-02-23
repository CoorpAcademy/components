import {selectProgression} from './actions/ui/progressions';
import {fetchProgression} from './actions/api/progressions';

const deferFetchProgression = async (progressionId, dispatch) => {
  await dispatch(fetchProgression(progressionId));

  setTimeout(() => deferFetchProgression(progressionId, dispatch), 1000);
};

const start = async ({progression: progressionId}, {dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  await dispatch(selectProgression(progressionId));

  return deferFetchProgression(progressionId, dispatch);
};

export default start;
