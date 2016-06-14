import createBehaviour from '../../../../util/behaviour';

const ellipsis = (engine, options) => props => {
  const properties = {
    style: {
      width: props.value,
      'white-space': 'nowrap',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      display: 'block'
    }
  };

  return properties;
};

export default createBehaviour(ellipsis);
