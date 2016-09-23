import createBehaviour from '../../../util/behaviour';

const tiny = (treant, options) => props => {
  const properties = {
    style: {
      fontSize: '9px'
    }
  };

  return properties;
};

export default createBehaviour(tiny);
