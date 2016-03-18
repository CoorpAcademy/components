import createBehaviour from '../../util/behaviour';

const primary = (engine, skin) => props => {
  const properties = {
    style: {
      color: props.value || skin && skin.primary
    }
  };

  return properties;
};

export default createBehaviour(primary);
