<<<<<<< c2b7b6440608d27a28159dba52944f9d12293f4b
import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import createInputText from '../../atom/input-text';
import createInputColor from '../../atom/input-color';
import createInputReadonly from '../../atom/input-readonly';
import createInputSwitch from '../../atom/input-switch';
=======
import {checker, createValidate} from '../../util/validation';
import createInputText from '../../atom/input-text';
import createInputColor from '../../atom/input-color';
>>>>>>> add update brand
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
<<<<<<< c2b7b6440608d27a28159dba52944f9d12293f4b
  const InputReadonly = createInputReadonly(treant, options);
  const InputSwitch = createInputSwitch(treant, options);
=======
>>>>>>> add update brand

  const BrandContentGroup = (props, children) => {
    const {
      title,
      disabled,
      fields
    } = props;

<<<<<<< c2b7b6440608d27a28159dba52944f9d12293f4b
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
    }

    const fieldsList = map(buildField, fields);
=======
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

>>>>>>> add update brand

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
