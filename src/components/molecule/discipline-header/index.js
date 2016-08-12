import { checker, createValidate } from '../../../util/validation';
import style from './discipline-header.css';


export default (engine, options = {}) => {
  const DisciplineHeader = (props, children) => {
    const {h} = engine;
    const {product} = props;
    return (
      <div className={style.wrapper}>
        <div className={style['course-wrapper-img']}>
          <img src={product.images[0] && product.images[0].url.https} className={style['course-img']} />
        </div>
        <div className={style['course-wrapper']}>
            <div className={style['course-title']}>{product.title}</div>
            <div className={style['course-desc']}>
            {product.description}
            </div>
        </div>
      </div>
    );
  };

  return DisciplineHeader;
};
