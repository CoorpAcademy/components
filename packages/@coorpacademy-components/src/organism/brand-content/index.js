import {checker, createValidate} from '../../util/validation';
import createBrandContentGroup from '../../molecule/brand-content-group';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    groups: checker.arrayOf(checker.shape({
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
    })),
    disabled: checker.bool.optional,
    isModified: checker.bool.optional,
    isPending: checker.bool.optional,
    onSubmit: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandContentGroup = createBrandContentGroup(treant, options);
  const HoverFill = HoverFillBehaviour(treant, options);

  const BrandContent = (props, children) => {
    const {
      groups,
      disabled,
      isModified,
      isPending,
      onSubmit
    } = props;

    const brandGroups = groups.map(group => {
      return (
        <div className={style.group}>
          <BrandContentGroup {...group} />
        </div>
      );
    });

    const disabledSubmit = isModified ? '' : 'disabled';
    const submitButton = onSubmit ? (
      <div className={style.saveGroup}>
        <HoverFill>
          <div className={style.save}>
            <input
              type='submit'
              value='Save changes'
              disabled={disabledSubmit}
            />
          </div>
        </HoverFill>
      </div>
    ) : null;

    return (
      <div className={style.wrapper}>
        <form className={style.groups} onSubmit={e => onSubmit(e)}>
          {brandGroups}
          {submitButton}
        </form>
      </div>
    );
  };

  BrandContent.validate = createValidate(conditions);
  return BrandContent;
};
