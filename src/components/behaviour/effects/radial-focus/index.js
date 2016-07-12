import createBehaviour from '../../../../util/behaviour';
import style from './radial-focus.css';

const centered = (engine, options) => props => {
  const properties = {
    className: style.focus
  };

  return properties;
};

export default createBehaviour(centered);
