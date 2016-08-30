import addClassName from '../../../util/add-class-name';
import createBehaviour from '../../../util/behaviour';
import style from './style.css';

const hoverFill = (engine, options) => (props, child) => ({
  className: addClassName(style.hoverFill)(child)
});

export default createBehaviour(hoverFill);
