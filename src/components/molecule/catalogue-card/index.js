import { checker, createValidate } from '../../../util/validation';
import style from './catalogue-card.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
    })
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const CatalogueCard = (props, children) => {
    const {h} = engine;
    const {product} = props;
    return (
      <li className={style['products-list-item']}>
        <div className={style['item-img']}>
          <a href="#">
            <img src={product.images[0] && product.images[0].url.https} />
          </a>
        </div>
        <div className={style['item-desc']}>
          <div className={style['item-desc-title']}>Cursus Stratégie Digitale</div>
          <div className={style['item-author']}>by Coorpacademy</div>
          <div className={style['item-desc-misc']}>
            <div className={style['item-popularity item-popularity-4']}>
              <span className={style.pop1}>★</span>
              <span className={style.pop2}>★</span>
              <span className={style.pop3}>★</span>
              <span className={style.pop4}>★</span>
              <span className={style.pop5}>★</span>
            </div>
            <div className={style['item-desc-price']}>€24.99</div>
          </div>
        </div>
      </li>
    );
  };

  CatalogueCard.validate = createValidate(conditions);
  return CatalogueCard;
};
