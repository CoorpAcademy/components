import getOr from 'lodash/fp/getOr';
import createBehaviour from '../../../util/behaviour';

const textInverted = (treant, options = {}) => props => {
  const {skin} = options;

  const properties = {
    style: {
      color: props.value || getOr('#ddd', 'skin.texts.inverted', skin)
    }
  };

  return properties;
};

export default createBehaviour(textInverted);
