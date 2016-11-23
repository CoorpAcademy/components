import {checker, createValidate} from '../../util/validation';
import createBrandFormGroup from '../../molecule/brand-form-group';
import createButton from '../../atom/button';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    groups: checker.arrayOf(checker.shape({
      title: checker.string,
      disabled: checker.bool.optional,
      fields: checker.array
    })),
    disabled: checker.bool.optional,
    isModified: checker.bool.optional,
    isPending: checker.bool.optional,
    onSubmit: checker.func.optional,
    submitValue: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandFormGroup = createBrandFormGroup(treant, options);
  const Button = createButton(treant, options);

  const BrandForm = (props, children) => {
    const {
      groups,
      disabled,
      isModified,
      isPending,
      onSubmit,
      submitValue
    } = props;

    const brandGroups = groups.map(group => {
      return (
        <div className={style.group}>
          <BrandFormGroup {...group} />
        </div>
      );
    });

    const disabledSubmit = disabled || isPending || !isModified;
    const submitButton = onSubmit ? (
      <div className={style.saveGroup}>
        <Button
          disabled={disabledSubmit}
          submitValue={submitValue}
        />
      </div>
    ) : null;

    return (
      <div className={style.wrapper}>
        <form className={style.groups} onSubmit={e => e.preventDefault() || onSubmit(e)}>
          {brandGroups}
          {submitButton}
        </form>
      </div>
    );
  };

  BrandForm.validate = createValidate(conditions);
  return BrandForm;
};
