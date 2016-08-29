import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    popular: checker.bool
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Star = (props, children) => {
    const state = props.popular ? style.popular : style.default;

    return (
      <span className={state}>★</span>
    );
  };

  Star.validate = createValidate(conditions);
  return Star;
};
