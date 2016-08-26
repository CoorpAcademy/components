import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../util/validation';
import style from './cursus-header.css';

const conditions = checker.shape({
  props: checker.shape({
    cursus: checker.shape({
      images: checker.array
    })
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const CursusHeader = (props, children) => {
    const {h} = treant;
    const {cursus} = props;

    const image = getOr(null, 'images.discipline_full_retina.url.https', cursus);

    return (
      <div>
        <div className={style.imgWrapper}>
          <img
            src={image}
          />
          <div className={style.title}>
            {getOrBlank('title', cursus)}
          </div>
        </div>
        <div className={style.courseWrapper}>
            <div className={style.desc}>
              {getOrBlank('description', cursus)}
            </div>
        </div>
      </div>
    );
  };

  CursusHeader.validate = createValidate(conditions);
  return CursusHeader;
};
