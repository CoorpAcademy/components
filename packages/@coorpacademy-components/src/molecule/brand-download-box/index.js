import {checker, createValidate} from '../../util/validation';
import createButton from '../../atom/button';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Button = createButton(treant, options);

  const BrandDownloadBox = (props, children) => {
    const {
      warning,
      description,
      onClick,
      submitValue
    } = props;

    return (
      <div className={style.wrapper}>
        {warning}
        {description}
        <Button
          onClick={onClick}
          submitValue={submitValue}
          background={'#CFD8DC'}
          color={'#717171'}
        />
      </div>
    );
  };

  BrandDownloadBox.validate = createValidate(conditions);
  return BrandDownloadBox;
};
