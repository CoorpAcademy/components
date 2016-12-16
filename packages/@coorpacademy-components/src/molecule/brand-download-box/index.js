import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import Button from '../../atom/button';
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

const BrandDownloadBox = ({children, ...props}) => {
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
export default BrandDownloadBox;
