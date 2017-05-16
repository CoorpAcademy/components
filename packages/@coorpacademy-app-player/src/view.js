import pipe from 'lodash/fp/pipe';
import getOr from 'lodash/fp/getOr';
import {Demo} from '@coorpacademy/components';

const createMapStateToProps = ({dispatch, api}) => ({state, params}) => {
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
