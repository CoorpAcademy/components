import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import createInputText from '../../atom/input-text';
import createInputColor from '../../atom/input-color';
import createSelect from '../../atom/select';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    fields: checker.array
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const InputText = createInputText(treant, options);
  const InputColor = createInputColor(treant, options);
  const Select = createSelect(treant, options);

  const buildField = field => {
    switch (field.type) {
      case 'color':
        return (
          <InputColor {...field}/>
        );
      case 'select':
        return (
          <Select />
        );
      default:
        return (
          <InputText {...field}/>
        );
    }
  };

  const buildFields = map(buildField);

  const FormGroup = (props, children) => {
    const {title, fields} = props;
    return (
      <fieldset className={style.set}>
        <legend>{title}</legend>
        {buildFields(fields)}
      </fieldset>
    );
  };

  FormGroup.validate = createValidate(conditions);
  return FormGroup;
};
