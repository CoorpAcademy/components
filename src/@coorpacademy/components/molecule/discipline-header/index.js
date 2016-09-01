import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string,
    title: checker.string,
    description: checker.string
  }).strict,
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const DisciplineHeader = (props, children) => {
    const {h} = treant;
    const {image, title, description} = props;

    return (
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <img
            src={image}
          />
        </div>
        <div className={style.courseWrapper}>
            <div className={style.title}>
              {title}
            </div>
            <div className={style.desc}>
              {description}
            </div>
        </div>
      </div>
    );
  };

  DisciplineHeader.validate = createValidate(conditions);
  return DisciplineHeader;
};
