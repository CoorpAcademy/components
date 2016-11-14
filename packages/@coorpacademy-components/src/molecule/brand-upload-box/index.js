import {checker, createValidate} from '../../util/validation';
import createButton from '../../atom/button';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    description: checker.string.optional,
    dropping: checker.bool.optional,
    onLoad: checker.func
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Button = createButton(treant, options);

  const BrandUploadBox = (props, children) => {
    const {
      description = '',
      dropping,
      onLoad
    } = props;

    return (
      <div className={style.wrapper}>
        <div className={dropping ? style.dropping : style.drop}>
          <div className={style.cont}>
            <i className={style.arrow}></i>
            <div className={style.tit}>
              Drag & Drop
            </div>
            <div className={style.desc}>
              {description}
            </div>
            <Button
              className={style.browse}
              submitValue="click here to browse"
            />
          </div>
          <input
            type='file'
            className={style.inputFile}
            onChange={onLoad}
          />
        </div>
      </div>
    );
  };

  BrandUploadBox.validate = createValidate(conditions);
  return BrandUploadBox;
};
