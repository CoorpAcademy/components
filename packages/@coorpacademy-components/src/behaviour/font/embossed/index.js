import createBehaviour from '../../../util/behaviour';

const embossed = (treant, options) => props => {
  const properties = {
    style: {
      'text-shadow': '1px 1px 1px grey'
    }
  };

  return properties;
};

export default createBehaviour(embossed);
