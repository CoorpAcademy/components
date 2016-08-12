import { checker, createValidate } from '../../util/validation';
import style from './star.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Star = (props, children) => {
    const state = props.favorite ? style.star : style.default;

    return (
      <span className={state}>★</span>
    );
  };

  Star.validate = createValidate(conditions);
  return Star;
};
