import pipe from 'lodash/fp/pipe';
import getOr from 'lodash/fp/getOr';
import {Demo} from '@coorpacademy/components';
import {answerProgression} from './actions/ui';

const createMapStateToProps = ({dispatch, getState, api}) => ({state, params}) => {
  window.createAnswer = answerProgression(api, dispatch, getState);
  return {
    plop: getOr('default plop', 'ui.plop', state),
    plup: getOr('default plup', 'ui.plup', state)
  };
};

export {createMapStateToProps};

export default options => {
  const mapStateToProps = createMapStateToProps(options);

  return pipe(mapStateToProps, Demo);
};
