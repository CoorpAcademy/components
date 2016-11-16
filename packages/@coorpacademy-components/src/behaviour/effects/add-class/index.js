import addClassName from '../../../util/add-class-name';
import createBehaviour from '../../../util/behaviour';

const addClass = (engine, options) => (props, child) => ({
  className: addClassName(props.className)(child)
});

export default createBehaviour(addClass);
