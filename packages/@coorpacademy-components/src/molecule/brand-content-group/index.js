import {checker, createValidate} from '../../util/validation';
import createInputText from '../../atom/input-text';
import createInputColor from '../../atom/input-color';
import createInputReadonly from '../../atom/input-readonly';
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
  const InputReadonly = createInputReadonly(treant, options);


  const BrandContentGroup = (props, children) => {
    const {
      title,
      disabled,
      fields
    } = props;

    const fieldsList = fields.map(field => {
      const {
        type
      } = field;

      const buildField = field => {
        switch (type) {
          case 'color':
            return (
              <InputColor {...field} />
            )
          case 'readonly':
            return (
              <InputReadonly {...field} />
            )
          default:
            return (
              <InputText {...field} />
            );
        }
      };

      return (
        <div className={style.field}>
          {buildField(field)}
        </div>
      );
    });


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
