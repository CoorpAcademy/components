import { checker, createValidate } from '../../util/validation';
import createStarRating from '../star-rating';
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

  const stars = [true, true, false, false, false];
  const StarRating = createStarRating(treant, options);

  const CatalogCard = (props, children) => {
    const {h} = treant;
    const {product} = props;
    return (
      <li className={style.catalogListItem}>
        <div className={style.imageWrapper}>
          <img src={product.images[0] && product.images[0].url.https} />
          <div className={style.overlay}>
            <HoverFill>
              <a href={product.href}>En savoir <span>plus</span></a>
            </HoverFill>
          </div>
        </div>
        <div className={style.infoWrapper}>
          <div className={style.title}><a href={product.href}>{product.title}</a></div>
          <div className={style.subtitle}>by {product.author}</div>
          <StarRating stars = {stars} />
        </div>
      </li>
    );
  };

  CatalogCard.validate = createValidate(conditions);
  return CatalogCard;
};
