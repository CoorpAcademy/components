import {checker, createValidate} from '../../util/validation';
import style from './style.css';

import createInputText from '../../atom/input-text';
import createSelect from '../../atom/select';

const conditions = checker.shape({
  props: checker.shape({
    group: checker.shape({
      name: checker.string,
      fields: checker.array
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const FormGroup = (props, children) => {
    const InputText = createInputText(treant, options);
    const Select = createSelect(treant, options);

    const {name, fields} = props.group;

    return (
      <fieldset className={style.set}>
        <legend>{name}</legend>
        {fields.map((field, index) => {
          switch (field.type) {
            case 'text':
              return (
                <InputText field={field}/>
              );
            case 'color':
              break;
            case 'select':
              return (
                <Select />
              );
            default:
              return;
          }
        })}
      </fieldset>
    );
  };

  FormGroup.validate = createValidate(conditions);
  return FormGroup;
};
