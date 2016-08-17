import createBehaviour from '../../../util/behaviour';

const embossed = (treant, options) => props => {
  const properties = {
    style: {
      padding: '6px 0px',
      'text-shadow': '1px 1px 1px grey'
    }
  };

  return properties;
};

export default createBehaviour(embossed);
