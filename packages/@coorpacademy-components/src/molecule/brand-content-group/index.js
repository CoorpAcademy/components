import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import createInputText from '../../atom/input-text';
import createInputColor from '../../atom/input-color';
import createInputReadonly from '../../atom/input-readonly';
import createInputSwitch from '../../atom/input-switch';
import createInputTextarea from '../../atom/input-textarea';
import createInputDoublestep from '../../atom/input-doublestep';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    disabled: checker.bool.optional,
    fields: checker.arrayOf(checker.shape({
      type: checker.string,
      title: checker.string,
      value: checker.any.optional,
      values: checker.arrayOf(checker.string).optional,
      placeholder: checker.string.optional,
      disabled: checker.bool.optional,
      description: checker.string.optional,
      error: checker.string.optional,
      onChange: checker.func.optional
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

  const BrandContentGroup = (props, children) => {
    const {
      title,
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
        </div>
        {fieldsList}
      </div>
    );
  };

  BrandContentGroup.validate = createValidate(conditions);
  return BrandContentGroup;
};
