import { checker, createValidate } from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './catalog-card.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      images: checker.array
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const HoverFill = HoverFillBehaviour(treant, options);

  const CatalogCard = (props, children) => {
    const {h} = treant;
    const {product} = props;
    return (
      <li className={style['catalog-list-item']}>
        <div className={style['image-wrapper']}>
          <img src={product.images[0] && product.images[0].url.https} />
          <div className={style.overlay}>
            <HoverFill>
              <a href={product.href}>En savoir <span>plus</span></a>
            </HoverFill>
          </div>
        </div>
        <div className={style['info-wrapper']}>
          <div className={style.title}><a href="#">Cursus Stratégie Digitale</a></div>
          <div className={style.subtitle}>by Coorpacademy</div>
          <div className={style['star-rating']}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </li>
    );
  };

  CatalogCard.validate = createValidate(conditions);
  return CatalogCard;
};
