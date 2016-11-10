import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandDownloadBox = (props, children) => {
    const {
      warning,
      description,
      onClick,
      submitValue
    } = props;

    return (
      <div className={style.wrapper}>

      </div>
    );
  };

  BrandDownloadBox.validate = createValidate(conditions);
  return BrandDownloadBox;
};
