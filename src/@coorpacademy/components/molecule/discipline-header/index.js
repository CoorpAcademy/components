import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../util/validation';
import style from './discipline-header.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      images: checker.array
    })
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const DisciplineHeader = (props, children) => {
    const {h} = treant;
    const {product} = props;

    return (
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <img
            src={getOrBlank('images.0.url.https', product)}
          />
        </div>
        <div className={style.courseWrapper}>
            <div className={style.title}>
              {getOrBlank('title', product)}
            </div>
            <div className={style.desc}>
              {getOrBlank('desciption', product)}
            </div>
        </div>
      </div>
    );
  };

  DisciplineHeader.validate = createValidate(conditions);
  return DisciplineHeader;
};
