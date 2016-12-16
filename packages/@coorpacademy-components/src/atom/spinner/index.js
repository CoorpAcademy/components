import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import {spinner, doubleBounce1, doubleBounce2} from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

const Spinner = ({children, ...props}) => {
  return (
    <div
      className={spinner}
    >

      <div
        className={doubleBounce1}
      />
      <div
        className={doubleBounce2}
      />
    </div>
  );
};

Spinner.validate = createValidate(conditions);
export default Spinner;
