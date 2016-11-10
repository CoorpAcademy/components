import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandUploadBox = (props, children) => {
    const {
      description,
      onClick
    } = props;

    return (
      <div className={style.wrapper}>
        upload
      </div>
    );
  };

  BrandUploadBox.validate = createValidate(conditions);
  return BrandUploadBox;
};
