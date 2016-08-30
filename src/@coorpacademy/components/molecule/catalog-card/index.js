import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import createStarRating from '../star-rating';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      images: checker.object
    })
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const HoverFill = HoverFillBehaviour(treant, options);
  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);

  const {translate = identity} = options;

  const CatalogCard = (props, children) => {
    const {h} = treant;
    const {product} = props;
    const total = 5;

    const href = getOr('', 'href', product);
    const image = getOr(null, 'images.discipline_thumb_retina.url.https', product);

    return (
      <li className={style.catalogListItem}>
        <div className={style.imageWrapper}>
          <img src={image} />
          <div className={style.overlay}>
            <HoverFill>
              <Link href={href}>En savoir <span>plus</span></Link>
            </HoverFill>
          </div>
        </div>
        <div className={style.infoWrapper}>
          <div className={style.title}>
            <Link href={href}>
              {getOrBlank('title', product)}
            </Link>
          </div>
          <div className={style.subtitle}>{translate('by {{author}}', product)}</div>
          <StarRating
            rating={getOr(0, 'popularity', product)}
            total={total}
          />
        </div>
      </li>
    );
  };

  CatalogCard.validate = createValidate(conditions);
  return CatalogCard;
};
