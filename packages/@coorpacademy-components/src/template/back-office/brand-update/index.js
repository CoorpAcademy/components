import {checker, createValidate} from '../../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandUpdate = (props, children) => {
    return (
      <div className={style.wrapper}>
      </div>
    );
  };

  BrandUpdate.validate = createValidate(conditions);
  return BrandUpdate;
};
