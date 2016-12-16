import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    popular: checker.bool
  }).strict,
  children: checker.none
});

const Star = ({children, ...props}) => {
  const state = props.popular ? style.popular : style.default;

  return (
    <span className={state}>★</span>
  );
};

Star.validate = createValidate(conditions);
export default Star;
