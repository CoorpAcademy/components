import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
import createPicture from '../../atom/picture';
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
      buttonName
    } = props;

    return (
      <div className={style.wrapper}>
        download temoppat
      </div>
    );
  };

  BrandDownloadBox.validate = createValidate(conditions);
  return BrandDownloadBox;
};
