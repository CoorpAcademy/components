import { checker, createValidate } from '../../../util/validation';
import style from './catalogue-card.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      images: checker.array
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
        <div>
          <a class='' href="#">
            <img src={product.images[0] && product.images[0].url.https} />
          </a>
        </div>
        <div>
          <div>Cursus Stratégie Digitale</div>
          <div>by Coorpacademy</div>
          <div>
            <div>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div>€24.99</div>
          </div>
        </div>
      </li>
    );
  };

  CatalogueCard.validate = createValidate(conditions);
  return CatalogueCard;
};
