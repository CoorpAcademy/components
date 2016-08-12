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

export default (treant, options = {}) => {
  const DisciplineHeader = (props, children) => {
    const {h} = treant;
    const {product} = props;
    return (
      <div className={style.wrapper}>
        <div className={style['course-wrapper-img']}>
          <img
            className={style['course-img']}
            src={product.images[0] && product.images[0].url.https}
          />
        </div>
        <div className={style['course-wrapper']}>
            <div className={style['course-title']}>
              {product.title}
            </div>
            <div className={style['course-desc']}>
              {product.description}
            </div>
        </div>
      </div>
    );
  };

  DisciplineHeader.validate = createValidate(conditions);
  return DisciplineHeader;
};
