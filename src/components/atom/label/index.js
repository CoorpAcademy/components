import { checker, createValidate } from '../../../util/validation';
import style from './label.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (engine, options) => {
  const {h} = engine;

  const Label = (props, children) => (
    <span className={style.default}>
      {children}
    </span>
  );

  Label.validate = createValidate(conditions);
  return Label;
};
