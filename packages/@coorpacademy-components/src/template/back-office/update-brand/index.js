import {checker, createValidate} from '../../../util/validation';
import style from './style.css';

import createForm from '../../../organism/form';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const UpdateBrand = (props, children) => {
    const {h} = treant;
    const Form = createForm(treant, options);

    return (
      <div className={style.container}>
        <div className={style.card}>
          <Form />
        </div>
      </div>
    );
  };

  UpdateBrand.validate = createValidate(conditions);
  return UpdateBrand;
};
