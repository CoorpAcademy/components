import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options) => {
  const {h} = treant;

  const Label = (props, children) => (
    <span className={style.default}>
      {children}
    </span>
  );

  Label.validate = createValidate(conditions);
  return Label;
};
