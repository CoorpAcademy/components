import {checker, createValidate} from '../../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandCreate = (props, children) => {
    return (
      <div>
      </div>
    );
  };

  BrandCreate.validate = createValidate(conditions);
  return BrandCreate;
};
