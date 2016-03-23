import createBehaviour from '../../util/behaviour';

const primary = (engine, options) => props => {
  const {skin} = options;

  const properties = {
    style: {
      color: props.value || skin && skin.primary
    }
  };

  return properties;
};

export default createBehaviour(primary);
