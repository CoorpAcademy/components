import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import createSelect from '../../atom/select';
import createInputText from '../../atom/input-text';
import createInputColor from '../../atom/input-color';
import createInputCheckbox from '../../atom/input-checkbox';
import createInputReadonly from '../../atom/input-readonly';
import createInputSwitch from '../../atom/input-switch';
import createInputTextarea from '../../atom/input-textarea';
import createInputDoublestep from '../../atom/input-doublestep';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    subtitle: checker.string.optional,
    disabled: checker.bool.optional,
    fields: checker.arrayOf(checker.shape({
      type: checker.string
    }))
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const InputText = createInputText(treant, options);
  const InputColor = createInputColor(treant, options);
  const InputTextarea = createInputTextarea(treant, options);
  const InputReadonly = createInputReadonly(treant, options);
  const InputSwitch = createInputSwitch(treant, options);
  const InputDoublestep = createInputDoublestep(treant, options);
  const InputCheckbox = createInputCheckbox(treant, options);
  const Select = createSelect(treant, options);

  const BrandFormGroup = (props, children) => {
    const {
      title,
      subtitle = '',
      fields
    } = props;

    const buildInput = field => {
      const {
        type
      } = field;
      switch (type) {
        case 'color':
          return (
            <InputColor {...field} />
          );
        case 'readonly':
          return (
            <InputReadonly {...field} />
          );
        case 'switch':
          return (
            <InputSwitch {...field} />
          );
        case 'textarea':
          return (
            <InputTextarea {...field} />
          );
        case 'doublestep':
          return (
            <InputDoublestep {...field} />
          );
        case 'select':
          return (
            <Select {...field} />
          );
        case 'checkbox':
          return (
            <InputCheckbox {...field} />
          );
        default:
          return (
            <InputText {...field} />
          );
      }
    };

    const buildField = field => {
      const input = buildInput(field);

      return (
        <div className={style.field}>
          {input}
        </div>
      );
    };

    const fieldsList = map(buildField, fields);

    return (
      <div className={style.wrapper}>
        <div className={style.title}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        {fieldsList}
      </div>
    );
  };

  BrandFormGroup.validate = createValidate(conditions);
  return BrandFormGroup;
};
