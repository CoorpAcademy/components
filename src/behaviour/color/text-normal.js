import createBehaviour from '../../util/behaviour';

const textNormal = (engine, options) => props => {
  const {skin} = options;

  const properties = {
    style: {
      color: props.value || skin && skin.texts.normal
    }
  };

  return properties;
};

export default createBehaviour(textNormal);
