import {checker, createValidate} from '../../util/validation';
import createButton from '../../atom/button';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    warning: checker.string.optional,
    description: checker.string.optional,
    href: checker.string.optional,
    submitValue: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Button = createButton(treant, options);

  const BrandDownloadBox = (props, children) => {
    const {
      warning = '',
      description = '',
      href = '',
      submitValue = ''
    } = props;

    return (
      <div className={style.wrapper}>
        <div className={style.texts}>
          <i className={style.icon}></i>
          <span className={style.warning}>{warning}</span>
          <p className={style.description}>{description}</p>
        </div>
        <div className={style.buttonWrapper}>
          <Button
            className={style.button}
            type='a'
            href={href}
            submitValue={submitValue}
          />
        </div>
      </div>
    );
  };

  BrandDownloadBox.validate = createValidate(conditions);
  return BrandDownloadBox;
};
