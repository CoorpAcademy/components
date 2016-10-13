import {checker, createValidate} from '../../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandList = (props, children) => {
    return (
      <div>
      </div>
    );
  };

  BrandList.validate = createValidate(conditions);
  return BrandList;
};
