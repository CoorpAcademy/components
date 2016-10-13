import {checker, createValidate} from '../../../util/validation';
import createBrandCreateForm from '../../../molecule/brand-create-form';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandCreateForm = createBrandCreateForm(treant, options);

  const BrandCreate = (props, children) => {
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <BrandCreateForm />
        </div>
      </div>
    );
  };

  BrandCreate.validate = createValidate(conditions);
  return BrandCreate;
};
