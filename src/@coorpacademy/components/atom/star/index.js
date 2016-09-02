import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    popular: checker.bool
  }).strict,
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
