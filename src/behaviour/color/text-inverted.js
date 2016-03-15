import createBehaviour from '../../util/behaviour';

const textInverted = (renderer, skin) => props => {
  const properties = {
    style: {
      color: props.value || skin && skin.texts.inverted
    }
  };

  return properties;
};

export default createBehaviour(textInverted);
