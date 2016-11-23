import {checker, createValidate} from '../../util/validation';
import createButton from '../../atom/button';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    subtitle: checker.string,
    description: checker.string,
    field: checker.shape({
      placeholder: checker.string,
      label: checker.string,
      onChange: checker.func,
      error: checker.string.optional,
      value: checker.string.optional
    }),
    onSubmit: checker.func,
    submitValue: checker.string,
    isPending: checker.bool.optional,
    isModified: checker.bool.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Button = createButton(treant, options);

  const BrandCreateForm = (props, children) => {
    const {
      title,
      subtitle,
      description,
      field,
      onSubmit,
      submitValue,
      isPending,
      isModified
    } = props;

    const wrapperClass = (isModified || isPending || field.error) ? style.modifiedWrapper : style.wrapper;
    const fieldClass = field.error ? style.error : style.default;
    const disabled = isPending || !isModified;

    return (
      <div className={wrapperClass}>
        <div className={style.header}>
          <h1>{title}</h1>
        </div>
        <form className={style.content} onSubmit={e => onSubmit(e)}>
          <h2>{subtitle}</h2>
          <div className={style.description}>
            {description}
          </div>
          <div className={fieldClass}>
            <label>
              <input
                type='text'
                placeholder={field.placeholder}
                value={field.value}
                onInput={e => field.onChange(e.target.value)}
              />{field.label}
            </label>
          </div>
          <Button
            disabled={disabled}
            submitValue={submitValue}
            centered={true}
          />
        </form>
      </div>
    );
  };

  BrandCreateForm.validate = createValidate(conditions);
  return BrandCreateForm;
};
