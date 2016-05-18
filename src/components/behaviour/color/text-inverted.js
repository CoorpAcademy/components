import createBehaviour from '../../../util/behaviour';

const textInverted = (engine, options) => props => {
  const {skin} = options;

  const properties = {
    style: {
      color: props.value || skin && skin.texts.inverted
    }
  };

  return properties;
};

export default createBehaviour(textInverted);
