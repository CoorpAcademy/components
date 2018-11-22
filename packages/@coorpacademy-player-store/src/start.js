import {selectProgression} from './actions/ui/progressions';

const start = ({progression}, {dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  return dispatch(selectProgression(progression));
};

export default start;
