import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandUploadSuccessful = (props, children) => {
    const {
      title = 'Success !'
    } = props;

    return (
      <div className={style.wrapper}>
        {title}
      </div>
    );
  };

  BrandUploadSuccessful.validate = createValidate(conditions);
  return BrandUploadSuccessful;
};
