import { checker, createValidate } from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string,
    title: checker.string,
    description: checker.string
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const CursusHeader = (props, children) => {
    const {h} = treant;
    const {image, title, description} = props;

    return (
      <div>
        <div className={style.imgWrapper}>
          <img
            src={image}
          />
          <div className={style.title}>
            {title}
          </div>
        </div>
        <div className={style.courseWrapper}>
            <div className={style.desc}>
              {description}
            </div>
        </div>
      </div>
    );
  };

  CursusHeader.validate = createValidate(conditions);
  return CursusHeader;
};
