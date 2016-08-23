import { checker, createValidate } from '../../util/validation';
import createStarRating from '../star-rating';
import createLink from '../../atom/link';
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
  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);

  const {translate} = options;

  const CatalogCard = (props, children) => {
    const {h} = treant;
    const {product} = props;
    const total = 5;

    return (
      <li className={style.catalogListItem}>
        <div className={style.imageWrapper}>
          <img src={product.images[0] && product.images[0].url.https} />
          <div className={style.overlay}>
            <HoverFill>
              <Link href={product.href}>En savoir <span>plus</span></Link>
            </HoverFill>
          </div>
        </div>
        <div className={style.infoWrapper}>
          <div className={style.title}><Link href={product.href}>{product.title}</Link></div>
          <div className={style.subtitle}>{translate('by {{author}}', product)}</div>
          <StarRating
            rating={product.popularity}
            total={total}
          />
        </div>
      </li>
    );
  };

  CatalogCard.validate = createValidate(conditions);
  return CatalogCard;
};
