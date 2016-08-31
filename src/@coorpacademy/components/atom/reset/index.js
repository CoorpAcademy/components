import { checker, createValidate } from '../../util/validation';
import {reset} from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options) => {
  const {h} = treant;

  const Reset = (props, children) => (
    <div
      className={reset}
    >
      {children}
    </div>
  );

  Reset.validate = createValidate(conditions);
  return Reset;
};
