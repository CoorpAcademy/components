import {selectProgression} from './actions/ui/progressions';

export default ({progression}, {dispatch}) => {
  /* istanbul ignore if  */
  if (module.hot) {
    module.hot.accept('./actions/ui/progressions', () => {});
  }

  return dispatch(selectProgression(progression));
};
