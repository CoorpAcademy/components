import getOr from 'lodash/fp/getOr';
import createBehaviour from '../../../util/behaviour';

const textNormal = (treant, options = {}) => props => {
  const {skin} = options;
  let color = getOr('#000', 'color', props);
  color = getOr(color, 'texts.normal', skin);

  const properties = {
    style: {
      color
    }
  };

  return properties;
};

export default createBehaviour(textNormal);
