import {checker, createValidate} from '../../util/validation';
import createButton from '../../atom/button';
import createLoader from '../../atom/loader';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    description: checker.string.optional,
    status: checker.oneOf(['default', 'loading', 'dropping']).optional,
    onLoad: checker.func
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Button = createButton(treant, options);
  const Loader = createLoader(treant, options);

  const BrandUploadBox = (props, children) => {
    const {
      title = '',
      description = '',
      onLoad
    } = props;

    let content;

    switch (props.status) {
      case 'loading':
        content = (
          <div className={style.default}>
            <div className={style.cont}>
              <Loader/>
              <div className={style.desc}>
                {title}
              </div>
            </div>
          </div>
        );
        break;

      default:
        content = (
          <div className={style[props.status || 'default']}>
            <div className={style.cont}>
              <i className={style.arrow}></i>
              <div className={style.tit}>
                {title}
              </div>
              <div className=
              {style.desc}>
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
        );

    }

    return (
      <div className={style.wrapper}>
        {content}
      </div>
    );
  };

  BrandUploadBox.validate = createValidate(conditions);
  return BrandUploadBox;
};
