import {checker, createValidate} from '../../util/validation';
import style from './style.css';

import createInputText from '../../atom/input-text';
import createSelect from '../../atom/select';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const FormGroup = (props, children) => {
    const {h} = treant;
    const InputText = createInputText(treant, options);
    const Select = createSelect(treant, options);

    const fields = [1, 2, 3, 4, 5];

    return (
      <fieldset className={style.set}>
        <legend>Propriétés</legend>
        <Select />
        {fields.map((field, index) => (
          <InputText />
        ))}
      </fieldset>
    );
  };

  FormGroup.validate = createValidate(conditions);
  return FormGroup;
};
