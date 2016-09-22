import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import createBehaviour from '../../../util/behaviour';

const primary = (treant, options = {}) => props => {
  const {skin} = options;

  const properties = {
    style: {
      color: getOr(get('primary', skin), 'value', props)
    }
  };

  return properties;
};

export default createBehaviour(primary);
