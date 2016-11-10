import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    text: checker.string.optional,
    filename: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandUploadLoading = (props, children) => {
    const {
      text = '',
      filename = ''
    } = props;

    return (
      <div className={style.wrapper}>
        loading
      </div>
    );
  };

  BrandUploadLoading.validate = createValidate(conditions);
  return BrandUploadLoading;
};
