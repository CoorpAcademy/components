import addClassName from '../../../../util/add-class-name';
import createBehaviour from '../../../../util/behaviour';
import style from './radial-focus.css';

const radialFocus = (engine, options) => (props, child) => ({
  className: addClassName(style.focus)(child)
});

export default createBehaviour(radialFocus);
