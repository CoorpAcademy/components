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

export default (engine, options = {}) => {
  const DisciplineHeader = (props, children) => {
    const {h} = engine;
    const {product} = props;
    return (
      <div className={style.wrapper}>
        <div className={style['course-wrapper-img']}>
          <img src='http://lorempixel.com/400/400/business' className={style['course-img']} />
        </div>
        <div className={style['course-wrapper']}>
            <div className={style['course-title']}>Stratégie digitale</div>
            <div className={style['course-desc']}>Le raz-de-marée du mobile, </div>
        </div>
      </div>
    );
  };

  DisciplineHeader.validate = createValidate(conditions);
  return DisciplineHeader;
};
