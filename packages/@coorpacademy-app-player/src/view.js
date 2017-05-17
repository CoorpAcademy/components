import pipe from 'lodash/fp/pipe';
import getOr from 'lodash/fp/getOr';
import {Demo} from '@coorpacademy/components';

const createMapStateToProps = ({api}) => dispatch => state => {
  return {
    plop: getOr('default plop', 'ui.plop', state),
    plup: getOr('default plup', 'ui.plup', state)
  };
};

export {createMapStateToProps};

export default options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, Demo);
};
