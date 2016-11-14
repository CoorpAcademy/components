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
      onLoad
    } = props;

    return (
      <div className={style.wrapper}>
        <div className={style.drop}>
          <div className={style.cont}>
            <i className={style.arrow}></i>
            <div className={style.tit}>
              Drag & Drop
            </div>
            <div className={style.desc}>
              {description}
            </div>
            <div className={style.browse}>
              click here to browse
            </div>
          </div>
          <input
            type='file'
            onChange={onLoad}
          />
        </div>
      </div>
    );
  };

  BrandUploadBox.validate = createValidate(conditions);
  return BrandUploadBox;
};
